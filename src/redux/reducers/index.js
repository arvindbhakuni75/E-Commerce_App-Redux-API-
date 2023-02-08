
import { combineReducers } from "redux";
import { productReducer, selectedProduxtReducer } from "./produxtReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProduxtReducer,
})


export default reducers;