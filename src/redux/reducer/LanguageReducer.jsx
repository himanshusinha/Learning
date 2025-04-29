// src/redux/reducer/LanguageReducer.js
const initialState = 'ENGLISH';

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return action.payload;
    default:
      return state;
  }
};

export default languageReducer;
