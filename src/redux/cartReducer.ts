import { AnyAction } from '@reduxjs/toolkit'

type State = {
    [id: number]: number
}

const initialState: State = {
    1: 3,
    2: 3,
}

const cartReducer = (state = initialState, action: AnyAction) => {
    return state
}

export default cartReducer
