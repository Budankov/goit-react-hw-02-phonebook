import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import styles from './App.module.scss';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const auditName = this.state.contacts.find(
      e => e.name.toLowerCase() === data.name.toLowerCase()
    );
    if (auditName) return alert(auditName.name + ' is already in contacts.');

    data.id = nanoid();
    this.setState(prevState => ({ contacts: [data, ...prevState.contacts] }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();

    return (
      <div className={styles.container}>
        <div className={styles.contactBook}>
          <h1 className={styles.title}>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <Filter value={filter} changeFilter={this.changeFilter} />
          <ContactList
            contact={visibleContact}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
