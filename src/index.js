import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { completeTask, titleChanged, taskDeleted, getTasks } from "./store/task";
import { Provider , useSelector, useDispatch } from "react-redux";

const store = configureStore();

const App = (params) => {
  const state = useSelector((state) => state.entities);
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(getTasks());
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
    <h1>App</h1>{""}
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
