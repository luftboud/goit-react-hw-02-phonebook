import PropTypes from 'prop-types';
const ContactForm = ({ onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      />
      <h3>Number</h3>
      <input type="tel" name="number" onChange={onChange}></input>
      <button type="submit">Add contact</button>
    </form>
  );
};
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export { ContactForm };
