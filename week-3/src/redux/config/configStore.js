import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../modules";

// 기존의 redux
// export const rootReducer = combineReducers({
//   counter,
// });
// export const store = createStore(rootReducer);

export const store = configureStore({
  reducer: {
    counterReducer,
  },
});
