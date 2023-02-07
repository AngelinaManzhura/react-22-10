import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type Props = {}

type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                List of products
            </Typography>
            <Grid container direction="row" alignItems="stretch" spacing={4}>
                {productsArray.map(
                    (
                        { title, description, capacity, type, price }: Product,
                        i
                    ) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <ProductsListItem
                                title={title}
                                description={description}
                                capacity={capacity}
                                type={type}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
