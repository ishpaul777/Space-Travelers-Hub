import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionReducer from './Missions/missions';
import rocketReducer from './Rockets/rockets';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
