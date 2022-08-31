// import axios from 'axios';

const FETCH_DATA = 'FETCH_DATA';
const TOGGLE_MISSION = 'TOGGLE_MISSION';
const apiUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const toggleJoined = (id) => ({
  type: TOGGLE_MISSION,
  id,
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
    case TOGGLE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, isjoined: !mission.isjoined };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default missionReducer;
