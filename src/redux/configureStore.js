import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './Rockets/rockets';

const rootReducer = combineReducers({
  rockets: rocketReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
