export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 10,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        capacity: '256',
        type: 'phone',
        price: 1500,
        image: '/images/iphone-black.jpeg',
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        capacity: '128',
        type: 'phone',
        price: 1000,
        image: '/images/iphone-blue.jpeg',
    },
    {
        id: 3,
        title: 'iPhone X',
        description: 'This is iPhone X',
        capacity: '256',
        type: 'phone',
        price: 500,
        image: '/images/iphone-purple.jpeg',
    },
    {
        id: 4,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        capacity: '256',
        type: 'phone',
        price: 1500,
        image: '/images/iphone-green.jpeg',
    },
    {
        id: 5,
        title: 'iPhone 14 Pro Max',
        description: 'This is iPhone 14 Pro Max',
        capacity: '512',
        type: 'phone',
        price: 2000,
        image: '/images/iphone-silver.jpeg',
    },
    {
        id: 6,
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        capacity: '64',
        type: 'phone',
        price: 500,
        image: '/images/iphone-gold.jpeg',
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray
