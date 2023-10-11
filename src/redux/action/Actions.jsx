import {
  ADD_ITEM,
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  REMOVE_ITEM,
} from '../ActionTypes';

export const addItemToCart = data => ({
  type: ADD_ITEM,
  payload: data,
});

export const removeItemToCart = index => ({
  type: REMOVE_ITEM,
  payload: index,
});

export const changeTheme = type => ({
  type: CHANGE_THEME,
  payload: type,
});
export const changeLanguage = type => ({
  type: CHANGE_LANGUAGE,
  payload: type,
});
