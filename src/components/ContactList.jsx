import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
          <button type="button" onClick={onDelete} id={el.id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export { ContactList };
