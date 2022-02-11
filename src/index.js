import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { getError } from "./store/errors";
import { 
  completeTask, 
  titleChanged, 
  taskDeleted, 
  loadTasks, 
  getTasks , 
  createTask,
  getTasksIsLoadingStatus } from "./store/task";
import { Provider , useSelector, useDispatch } from "react-redux";

const store = configureStore();

const App = (params) => {
  const state = useSelector(getTasks());
  const isLoading = useSelector(getTasksIsLoadingStatus());
  const dispatch = useDispatch();
  const error = useSelector(getError());

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  const changeTitle = (taskId) => {
    dispatch( titleChanged(taskId));
  }
  const deleteTask = (taskId) => {
    dispatch( taskDeleted(taskId));
  }
  if (isLoading) {
    return <h1>Loading</h1>
  }
  if (error) {
    return <p>{error}</p>;
  }
  return ( 
    <>
    <h1>App</h1>
    <button onClick={() => dispatch(createTask())}>Add toto</button>
    <ul>
      {state.map(el =>( 
        <li key={el.id}>
          <p>{el.title}</p>
          <p>{`Completed: ${el.completed}`}</p>
          
          <button onClick = {() => dispatch(completeTask(el.id))}>
            Complete
          </button>
          <button onClick = {() => changeTitle(el.id) }>
            Change title
          </button>
          
          <button onClick = {() => deleteTask(el.id) }>
            Delete
          </button>
          
        </li>
      ))}
    </ul>
    </>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
