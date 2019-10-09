import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import myReducers from "./../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	myReducers,
	composeEnhancers(applyMiddleware(thunk))
);