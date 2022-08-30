// import axios from 'axios';

const FETCH_DATA = 'FETCH_DATA';
const JOIN_THE_MISSION = 'JOIN_THE_MISSION';
const apiUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_THE_MISSION,
  payload: id,
});

export const fetchMission = () => async (dispatch) => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const missionData = data.map((mission) => ({
    name: mission.mission_name,
    id: mission.mission_id,
    description: mission.description,
    isjoined: false,
  }));
  dispatch(fetchMissions(missionData));
};

// reducers

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case JOIN_THE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, reserved: !mission.reserved };
          }
          return mission;
        }),
      };
    default:
      return state;
  }
};

export default missionReducer;
