import { createStore } from "redux";
import  taskReducer from "./task";

const initialState = [
  { id: 1, title: "Task1",completed: false,deleted: "" }, 
  { id: 2, title: "Task2",completed: false, deleted: "" }
];

 function configureStore() {
  return createStore(taskReducer, initialState);
}
export default configureStore