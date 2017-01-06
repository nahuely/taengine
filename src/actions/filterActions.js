import { SET_BRIEF_FILTER } from './action-types';

export const setBriefFilter = (filter) => {
  return {
    type: SET_BRIEF_FILTER,
    filter
  };
}
