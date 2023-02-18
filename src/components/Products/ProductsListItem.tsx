import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
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
    color: string
    show: boolean
}

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 1,
        color: 'green',
        show: false,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
    }

    changeColor = () => {
        this.setState((prevState) => ({
            color: prevState.color === 'green' ? 'red' : 'green',
        }))
    }

    toggleShow = () => {
        this.setState((prevState) => ({
            show: !prevState.show,
        }))
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
                    <p>
                        Color:{' '}
                        <span className={this.state.color}>
                            {this.state.color}
                        </span>
                    </p>
                    <button onClick={this.changeColor}>Change color</button>
                    <hr />
                    {this.state.show ? (
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum quod, magnam at temporibus veritatis
                            voluptatibus laborum consequuntur. Vitae nostrum
                            exercitationem, accusamus sed rem, nemo debitis
                            laborum, excepturi qui magni maxime!
                        </p>
                    ) : null}
                    <button onClick={this.toggleShow}>
                        Show full description
                    </button>
                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Button
                            disabled={this.state.count <= 1}
                            variant="outlined"
                            onClick={() => this.onDecrementClick()}
                        >
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={this.state.count}
                        ></TextField>
                        <Button
                            disabled={this.state.count >= 10}
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
