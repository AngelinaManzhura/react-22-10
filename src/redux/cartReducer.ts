import { AnyAction } from '@reduxjs/toolkit'

type State = {
    [id: number]: number
}

const initialState: State = {
    1: 3,
    2: 3,
}

const cartReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return {
                ...state,
                [action.id]: (state[action.id] || 0) + action.count,
            }

        default:
            return state
    }
}

export default cartReducer
