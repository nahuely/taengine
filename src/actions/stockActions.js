import { FETCH_STOCK_LIST, FETCH_STOCK_BRIEF, FETCH_STOCK_DATA_BY_SYMBOL } from './action-types';

export const fetchStockList = () => {
  return {
    type: FETCH_STOCK_LIST,
    person
  };
}

export const fetchStockBrief = () => {
  return {
    type: FETCH_STOCK_BRIEF,
    person
  };
}

export const fetchStockBySymbol = (symbol) => {
  return {
    type: FETCH_STOCK_DATA_BY_SYMBOL,
    person
  };
}
