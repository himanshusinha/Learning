// src/redux/action/Actions.js

import {ADD_ITEM, REMOVE_ITEM, CHANGE_ITEM_QUANTITY} from '../ActionTypes';

export const addItemToCart = item => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const changeItemQuantity = (id, type) => ({
  type: 'CHANGE_QUANTITY',
  payload: {id, type},
});


export const removeItemToCart = index => ({
  type: REMOVE_ITEM,
  payload: index,
});

 
export const changeTheme = theme => ({
  type: 'CHANGE_THEME',
  payload: theme,
});
export const changeLanguage = language => ({
  type: 'CHANGE_LANGUAGE',
  payload: language,
});
