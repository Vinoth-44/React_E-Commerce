import handleCart from './handleCart'
import productSlice from "./productSlice";
import handleCheckout from './handleCheckout';
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    content: productSlice,
    handleCart,
    handleCheckout
})

export default rootReducers;