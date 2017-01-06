import { SET_ACTIVE_MENU } from './../actions/action-types'

const initialState = null

const activeMenu = (state = initialState, action) => {
    switch(action.type) {
        case SET_ACTIVE_MENU:
            return action.payload
        default:
            return state
    }
}

export default activeMenu