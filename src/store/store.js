import { applyMiddleware, createStore, compose } from "redux";
import  taskReducer from "./task";
import { logger } from "./moddeware/logger";
import { thunk } from "./moddeware/thunk";
const middlewareEnhancer = applyMiddleware(logger, thunk)

function configureStore() {
  return createStore(
    taskReducer, compose(
       middlewareEnhancer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__())
  );
}
export default configureStore