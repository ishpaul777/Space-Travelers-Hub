import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ProfilePage from '../../../pages/ProfilePage';
import missionReducer from '../../../redux/Missions/missions';
import rocketReducer from '../../../redux/Rockets/rockets';
import MissionsPage from '../../../pages/MissionsPage';

const initialState = {
  missions: [{
    id: 'Thaicom#123',
    name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    isjoined: false,
  }],
};

const rootReducer = combineReducers({
  missions: missionReducer,
  rockets: rocketReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

describe('Missions tests', () => {
  test('Mission Page should render', () => {
    const missionPage = render(
      <Provider store={store}>
        <BrowserRouter>
          <MissionsPage />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(missionPage).toMatchSnapshot();
  });

  test('Displays the Mission', () => {
    render(
      <Provider store={store}>
        <MissionsPage />
      </Provider>,
    );
    const missionName = screen.getByText('Thaicom');
    expect(missionName).toBeInTheDocument();
  });

  test('Joining a Mission and reflecting the joined mission in Profile Page', () => {
    render(
      <Provider store={store}>
        <MissionsPage />
        <ProfilePage />
      </Provider>,
    );
    expect(screen.getByText('No Missions Joined')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Join Mission'));
    expect(screen.getAllByText('Thaicom').length).toEqual(2);
  });
});
