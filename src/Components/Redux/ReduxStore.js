import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'

import { reducer as formReducer } from 'redux-form';



let reducers = combineReducers(
	 {
		 form: formReducer,
	 });


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(reducers,compose(
	composeEnhancers(
	applyMiddleware(thunkMiddleware)
)));



export default store;
