import { configureStore } from "@reduxjs/toolkit";
import  taskReducer from "./task";
import { logger } from "./moddeware/logger";

function createStore() {
  return configureStore({ 
    reducer: taskReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !=="production",
  });
}


export default createStore