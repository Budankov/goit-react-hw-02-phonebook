import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';

const ContactList = ({ contact, deleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contact.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          {name}: {number}
          <button
            className={styles.deleteBtn}
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
