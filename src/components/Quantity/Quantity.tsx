import { Button, TextField } from '@mui/material'

type Props = {
    count: number
    onDecrement: () => void
    onIncrement: () => void
    minCount: number
}

const Quantity = ({ count, onDecrement, onIncrement, minCount }: Props) => {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={() => onDecrement()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField size="small" value={count}></TextField>
            <Button
                variant="outlined"
                onClick={() => onIncrement()}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}

export default Quantity
