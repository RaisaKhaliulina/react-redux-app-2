export function logger({dispatch, getState}) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      return next(action);
    };
  };
}