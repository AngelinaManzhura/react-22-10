import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { count } from 'console'
import { Component } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
    decrementDisabled: boolean
}

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 1,
        decrementDisabled: true,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
            decrementDisabled: prevState.decrementDisabled
                ? false
                : prevState.decrementDisabled,
        }))
    }

    // onDecrementClick = (num: number) => {
    //     if (this.state.count > 1) {
    //         this.setState((prevState) => ({
    //             count: prevState.count - num,
    //         }))
    //     }
    // }

    onDecrementClick = () => {
        this.setState((prevState) => {
            let newCount = prevState.count - 1
            return {
                count: newCount,
                decrementDisabled: newCount === 1 ? true : false,
            }
        })
    }

    render() {
        const { title, description, capacity, type, price, image } = this.props

        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="product-description">{description}</div>
                    <div className="product-features ">Type: {type}</div>
                    <div className="product-features ">
                        Capacity: {capacity} Gb
                    </div>
                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Button
                            disabled={this.state.decrementDisabled}
                            variant="outlined"
                            onClick={this.onDecrementClick}
                        >
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={this.state.count}
                        ></TextField>
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductsListItem
