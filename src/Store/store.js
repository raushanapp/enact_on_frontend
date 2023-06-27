import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./ProductReducer/reducer";

const rootReducer = {
    data:reducer
};

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));