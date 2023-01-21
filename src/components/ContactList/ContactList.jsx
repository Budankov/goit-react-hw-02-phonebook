import styles from './ContactList.scss';

const ContactList = ({ contact, deleteContact }) => {
  return (
    <ul className="contactList">
      {contact.map(({ id, name: { name, number } }) => (
        <li key={id} className="contactItem">
          {name}: {number}
          <button onClick={() => deleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
