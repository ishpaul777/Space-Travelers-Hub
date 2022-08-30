import PropTypes from 'prop-types';

const TableRow = ({
  id,
  name,
  description,
  isjoined,
}) => (
  <tr>
    <td>{name}</td>
    <td>{description}</td>

  </tr>
);

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isjoined: PropTypes.bool.isRequired,
};
export default TableRow;
