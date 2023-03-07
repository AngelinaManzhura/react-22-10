import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Христина',
            text: 'Покупкою задоволена на всі 100!!!! Гарний дизайн, приємний колір, легкий, зручно поміщається в жіночій руці.',
        },
        {
            name: 'Тарас',
            text: 'Швидка доставка.Телефон Працює бездогано 10/10',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    return (
        <>
            <Typography component="h2" variant="h4" sx={{ margin: '40px 0' }}>
                Reviews
            </Typography>
            {reviews.map(({ name, text }, i) => (
                <Card variant="outlined" key={i} sx={{ margin: '30px 0' }}>
                    <CardContent>
                        <div>{name}:</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form>
                <h3>Please leave a review</h3>
                <div>
                    <TextField label="Your name" />
                </div>
                <br />
                <div>
                    <TextareaAutosize minRows={7} placeholder="Your message" />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </>
    )
}

export default Reviews
