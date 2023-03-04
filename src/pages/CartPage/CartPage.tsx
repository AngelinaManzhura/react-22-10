import { Typography } from '@mui/material'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <Typography variant="h4" component="h1">
                Cart
            </Typography>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].title}:{' '}
                        {productsInCart[parseInt(productId)]}
                    </div>
                ))}
            </div>
            <div>
                Total: ${' '}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsObject[parseInt(productId)].price *
                            productsInCart[parseInt(productId)],
                    0
                )}
            </div>
        </div>
    )
}

export default CartPage
