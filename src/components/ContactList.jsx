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
        : contacts.map(el => {
            const name = el.name.toLowerCase();
            const request = filter;
            if (name.includes(request)) {
              return (
                <li key={el.id}>
                  {el.name}: {el.number}
                  <button type="button" onClick={onDelete} id={el.id}>
                    Delete
                  </button>
                </li>
              );
            }
            // else {
            //   return (
            //     <p>You do not have {request} in your contact book yet</p>
            //   );
            // }
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
