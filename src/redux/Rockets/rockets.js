const SET_ROCKETS = 'SET_ROCKETS';
const TOGGLE_RESERVED = 'SET_RESERVED';

const rockets = [];
export default function bookReducer(state = rockets, action) {
  switch (action.type) {
    case SET_ROCKETS: {
      return action.rockets;
    }
    case TOGGLE_RESERVED: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, isReserved: !rocket.isReserved };
      });
      return newState;
    }
    default:
      return state;
  }
}

export const SetRockets = (rockets) => ({
  type: SET_ROCKETS,
  rockets,
});

export const ToggleReserved = (id) => ({
  type: TOGGLE_RESERVED,
  id,
});

export const getRocketsFromServer = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const rockets = data.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    image: rocket.flickr_images[(Math.random() >= 0.5) ? 1 : 0],
    description: rocket.description,
    isReserved: false,
  }));
  dispatch(SetRockets(rockets));
};
