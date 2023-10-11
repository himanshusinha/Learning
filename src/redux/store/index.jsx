import {combineReducers, createStore} from 'redux';
import {Reducer} from '../reducer/Reducer';
import {ThemeReducer} from '../reducer/ThemeReducer';

const totalReducers = combineReducers({Reducer, ThemeReducer});
export const store = createStore(totalReducers);
