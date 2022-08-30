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
      <td>{name}</td>
      <td>{description}</td>
      <td><span>{!isjoined ? 'Not a member' : 'Member'}</span></td>
      <td>
        {!isjoined
          ? <button type="button" onClick={() => dispatch(toggleJoined(id))}>Join Mission</button>
          : <button type="button" onClick={() => dispatch(toggleJoined(id))}>Leave Mission</button>}
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
