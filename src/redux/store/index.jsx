import {combineReducers, createStore} from 'redux';
import {Reducer} from '../reducer/Reducer';
import {ThemeReducer} from '../reducer/ThemeReducer';
import {LanguageReducer} from '../reducer/LanguageReducer';
const totalReducers = combineReducers({Reducer, ThemeReducer, LanguageReducer});
export const store = createStore(totalReducers);
