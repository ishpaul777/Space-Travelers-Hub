/* eslint-disable no-unused-vars  */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../../redux/Missions/missions';
import TableRow from './TableRow';

const Missions = () => {
  const missions = useSelector((state) => (state.missions));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMission());
  }, []);

  const tablerRows = missions.map((mission) => {
    console.log(mission);
    return (
      <TableRow
        key={mission.id}
        description={mission.description}
        name={mission.name}
        id={mission.id}
        isjoined={mission.isjoined}
      />
    );
  });
  return (
    <div className="clm-row">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
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
