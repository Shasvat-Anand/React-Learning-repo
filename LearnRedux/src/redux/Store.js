import { createStore } from "redux";
import ProductReducer from "./reducers/ProductReducer";

const Store = createStore(
    ProductReducer,
);

export default Store;