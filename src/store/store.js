import { applyMiddleware, createStore, compose } from "redux";
import  taskReducer from "./task";
import { logger } from "./moddeware/logger";

const middlewareEnhancer = applyMiddleware(logger)

function configureStore() {
  return createStore(
    taskReducer, compose(
       middlewareEnhancer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__())
  );
}
export default configureStore