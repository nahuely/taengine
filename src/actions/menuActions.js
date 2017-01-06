import { SET_ACTIVE_MENU } from './action-types';

export const setActiveMenu = (menu) => {
  return {
    type: SET_ACTIVE_MENU,
    menu
  };
}
