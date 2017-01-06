import { FETCH_STOCK_LIST } from './../actions/action-types'

const initialState = null

const stockList = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_STOCK_LIST:
            return action.payload
        default:
            return state
    }
}

export default stockList