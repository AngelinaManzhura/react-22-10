import { Button, Card, CardContent, Grid } from '@mui/material'
import Title from 'components/Title/Title'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { toggleLike } from 'redux/likeReducer'
import { useState } from 'react'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}

const FavoritesPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

    const productsLike = useAppSelector((state) => state.productsLike)

    const filteredObject = Object.fromEntries(
        Object.entries(productsLike).filter((item) => item[1] === true)
    )

    const dispatch = useAppDispatch()

    return (
        <>
            <Title>Favorites</Title>
            <Grid container spacing={4}>
                {Object.keys(filteredObject).map((id) => (
                    <Grid item xs={12} sm={4} key={id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Button
                                    variant="outlined"
                                    onClick={() => dispatch(toggleLike(id))}
                                >
                                    {filteredObject[id] ? (
                                        <FavoriteIcon />
                                    ) : (
                                        <FavoriteBorderIcon />
                                    )}
                                </Button>
                                <div className="product-image">
                                    <img
                                        src={productsObject[parseInt(id)].image}
                                        alt=""
                                    />
                                </div>
                                <div className="product-title">
                                    {productsObject[parseInt(id)].title}
                                </div>
                                <div className="product-description">
                                    {productsObject[parseInt(id)].description}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <br />
            <button onClick={() => setIsPopupOpen(true)}>Show popup</button>
            {isPopupOpen && (
                <div className="popup">
                    <Title>Hello Popup</Title>
                    <button onClick={() => setIsPopupOpen(false)}>Close</button>
                </div>
            )}
        </>
    )
}

export default FavoritesPage
