type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray: Product[] = [
    {
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        capacity: '256',
        type: 'phone',
        price: 1500,
    },
    {
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        capacity: '128',
        type: 'phone',
        price: 1000,
    },
    {
        title: 'iPhone X',
        description: 'This is iPhone X',
        capacity: '256',
        type: 'phone',
        price: 500,
    },
    {
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        capacity: '256',
        type: 'phone',
        price: 1500,
    },
    {
        title: 'iPhone 14 Pro Max',
        description: 'This is iPhone 14 Pro Max',
        capacity: '512',
        type: 'phone',
        price: 2000,
    },
    {
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        capacity: '64',
        type: 'phone',
        price: 500,
    },
]

export default productsArray
