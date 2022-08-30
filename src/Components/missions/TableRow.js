import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleJoined } from '../../redux/Missions/missions';

const TableRow = ({
  id,
  name,
  description,
  isjoined,
}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="mission--name">{name}</td>
      <td className="mission--description">{description}</td>
      <td>
        {!isjoined
          ? <span className="joined--status--false">Not a member</span>
          : <span className="joined--status--true">Member</span>}
      </td>
      <td>
        {!isjoined
          ? <button className="join--mission--button" type="button" onClick={() => dispatch(toggleJoined(id))}>Join Mission</button>
          : <button className="leave--mission--button" type="button" onClick={() => dispatch(toggleJoined(id))}>Abort Mission</button>}
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isjoined: PropTypes.bool.isRequired,
};
export default TableRow;
