import { nanoid } from 'nanoid';
// model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
import styles from './ContactForm.module.scss';

const ContactForm = ({ options }) => {
  const handleInputChange = e => {
    console.log(e.currentTarget.value);
  };

  return (
    <input
      onChange={handleInputChange}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  );
};
export default ContactForm;
