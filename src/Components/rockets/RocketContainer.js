import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/RocketContainer.css';
import Rockets from './Rockets';
import { getRocketsFromServer } from '../../redux/Rockets/rockets';

const RocketsContainer = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocketsFromServer());
    }
  }, []);

  const rocketComponets = rockets.map((rocket) => [
    <Rockets
      key={rocket.id}
      id={rocket.id}
      name={rocket.name}
      image={rocket.image}
      description={rocket.description}
      isReseved={rocket.isReserved}
    />,
  ]);
  return <section className="rocket--container flex">{rocketComponets}</section>;
};

export default RocketsContainer;
