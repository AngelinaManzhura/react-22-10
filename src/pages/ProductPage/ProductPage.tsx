import { Typography } from '@mui/material'
import { title } from 'process'
import { useParams } from 'react-router-dom'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}

const ProductPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const { id } = useParams()

    const product = productsObject[parseInt(id!)]
    console.log(product)

    return (
        <>
            <Typography variant="h4" component={'h1'}>
                {product.title}
            </Typography>
        </>
    )
}

export default ProductPage
