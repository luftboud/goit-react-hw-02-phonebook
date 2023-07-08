import PropTypes from 'prop-types';
const Filter = ({ onChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" onChange={onChange} />
    </>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export { Filter };
