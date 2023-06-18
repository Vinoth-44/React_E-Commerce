import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer";
import productSlice from "./reducer/productSlice";
import handleCart from "./reducer/handleCart";

const store = configureStore({
    reducer: rootReducers
});

/*const store = configureStore({
    reducer:{
  content: productSlice,
  handleCart
    }
});*/

export default store;
