import { FETCH_STOCK_BRIEF } from './../actions/action-types'

const initialState = null

const stockBrief = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_STOCK_BRIEF:
            return action.payload
        default:
            return state
    }
}

export default stockBrief