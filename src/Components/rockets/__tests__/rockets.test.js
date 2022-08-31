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
import RocketsPage from '../../../pages/RocketsPage';

const initialState = {
  missions: [],
  rockets: [{
    id: 'falcon1',
    name: 'Falcon 1',
    isReserved: false,
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    image: 'image--rocket1.jpg',
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

describe('Rockets tests', () => {
  test('should render', () => {
    const rockets = render(
      <Provider store={store}>
        <BrowserRouter>
          <RocketsPage />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(rockets).toMatchSnapshot();
  });
  test('Displays the Rocket', () => {
    render(
      <Provider store={store}>
        <RocketsPage />
      </Provider>,
    );
    const rocketName = screen.getByText('Falcon 1');
    expect(rocketName).toBeInTheDocument();
  });
  test('Reserving and reflecting the reserved rocket in Profile Page', () => {
    render(
      <Provider store={store}>
        <RocketsPage />
        <ProfilePage />
      </Provider>,
    );
    expect(screen.getByText('No Missions Joined')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Reserve Rocket'));
    expect(screen.getAllByText('Falcon 1').length).toEqual(2);
  });

  test('Aborting a Rocket Reservation and removing the canceled rocket in Profile Page', () => {
    render(
      <Provider store={store}>
        <RocketsPage />
        <ProfilePage />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Cancel Reservation'));
    expect(screen.getAllByText('Falcon 1').length).toEqual(1);
  });
});
