import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import './ProductsListItem.scss'
import { useAppSelector } from 'redux/hooks'

type Props = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (count: number, price: number) => void
}

const ProductsListItem = ({
    id,
    title,
    description,
    capacity,
    type,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const isLiked = useAppSelector((state) => state.productsLike[id])

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <Button variant="outlined">
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-description">{description} </div>
                <div className="product-features ">Type: {type} </div>
                <div className="product-features ">Capacity: {capacity} Gb</div>
                <div className="product-price">{price}$</div>
                <Quantity
                    count={count}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                    minCount={1}
                />
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
