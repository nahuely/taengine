import { SET_BRIEF_FILTER } from './../actions/action-types'

const initialState = null

const stockBriefFilter = (state = initialState, action) => {
    switch(action.type) {
        case SET_BRIEF_FILTER:
            return action.payload
        default:
            return state
    }
}

export default stockBriefFilter