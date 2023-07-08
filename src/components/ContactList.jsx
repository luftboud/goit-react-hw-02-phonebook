import PropTypes from 'prop-types';
const ContactList = ({ filter, contacts, onDelete }) => {
  return (
    <ul>
      {filter === ''
        ? contacts.map(el => (
            <li key={el.id}>
              {el.name}: {el.number}
              <button type="button" onClick={onDelete} id={el.id}>
                Delete
              </button>
            </li>
          ))
        : contacts
            .filter(el => el.name.toLowerCase().includes(filter))
            .map(el => {
              return (
                <li key={el.id}>
                  {el.name}: {el.number}
                  <button type="button" onClick={onDelete} id={el.id}>
                    Delete
                  </button>
                </li>
              );
            })}
    </ul>
  );
};
ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export { ContactList };
