import rootReducer from '../reducers'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const logger = createLogger()

export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  )
}