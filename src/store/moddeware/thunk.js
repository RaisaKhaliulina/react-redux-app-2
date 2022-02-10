export function thunk({getState, dispatch}) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      if (typeof action === "function") {
        console.log(action)
        action(getState,dispatch)
      } else {
        return next(action);
      }
    };
  };
}