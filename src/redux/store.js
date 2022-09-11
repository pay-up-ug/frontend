import { createStore , applyMiddleware} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import { loadState } from "../helpers/localStorage";
import thunk from "redux-thunk";
const persistedState = loadState();


const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk)),

);


export default store;