/* eslint-disable no-unused-vars  */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../../redux/Missions/missions';
import TableRow from './TableRow';
import './styles/mission.css';

const Missions = () => {
  const missions = useSelector((state) => (state.missions));
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) dispatch(fetchMission());
  }, []);

  const tablerRows = missions.map((mission) => (
    <TableRow
      key={mission.id}
      description={mission.description}
      name={mission.name}
      id={mission.id}
      isjoined={mission.isjoined}
    />
  ));
  return (
    <div className="missions--container flex">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th colSpan="2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tablerRows}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
