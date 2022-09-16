export const createStore = (reducer, initialState) => {
  let _state = initialState;
  let _reducer = reducer;
  let _subscribers = [];
  function getState() {
    return _state;
  }

  function dispatch(action) {
    _state = _reducer(_state, action);
    _subscribers.forEach((callback) => callback());
  }

  function subscribe(callback) {
    _subscribers.push(callback);
    return () => (_subscribers = _subscribers.filter((f) => f !== callback));
  }

  return { getState, dispatch, subscribe };
};
