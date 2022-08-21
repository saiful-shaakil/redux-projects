import { createStore } from "redux";
import counterReducer from "./CounterFeatures/CounterReducer";

const store = createStore(counterReducer);

export default store;
