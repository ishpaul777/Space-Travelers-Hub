import PropTypes from 'prop-types';
import './styles/Rocket.css';
import { useDispatch } from 'react-redux';
import { ToggleReserved } from '../../redux/Rockets/rockets';

const Rocket = ({
  id,
  name,
  image,
  description,
  isReseved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="rocket flex">
      <img src={image} alt="rocket" className="rocket--image" />
      <div className="rocket--info">
        <h2 className="rocket--name">{name}</h2>
        <p className="rocket--description">
          {(isReseved)
        && <span className="reserved--batch">Reserved</span>}
          {description}
        </p>
        <div className="user--actions">
          {(isReseved)
            ? <button className="cancel--reserve--button" onClick={() => dispatch(ToggleReserved(id))} type="button">Cancel Reservation</button>
            : <button className="reserve--button" onClick={() => dispatch(ToggleReserved(id))} type="button">Reserve Rocket</button>}
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isReseved: PropTypes.bool.isRequired,
};

export default Rocket;
