// import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';
// // import authReducer from './auth_reducer';
//
// const rootReducer = combineReducers({
//   form
// });
//
// export default rootReducer;


export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
