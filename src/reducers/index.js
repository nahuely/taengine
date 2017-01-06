import { combineReducers } from 'redux'
import stockList from './stockList'
import stockBrief from './stockBrief'
import stockBriefFilter from './stockBriefFilter'
import activeMenu from './activeMenu'

const rootReducer = combineReducers({
  stockList,
  stockBrief,
  stockBriefFilter,
  activeMenu
});

export default rootReducer