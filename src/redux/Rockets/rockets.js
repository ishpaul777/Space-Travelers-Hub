const SET_ROCKETS = 'SET_ROCKETS';

const rockets = [];
export default function bookReducer(state = rockets, action) {
  switch (action.type) {
    case `${SET_ROCKETS}`: {
      return action.rockets;
    }
    default:
      return state;
  }
}

export const SetRockets = (rockets) => ({
  type: SET_ROCKETS,
  rockets,
});

export const getRocketsFromServer = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const rockets = data.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    image: rocket.flickr_images[0],
    description: rocket.description,
    isReserved: false,
  }));
  dispatch(SetRockets(rockets));
};
