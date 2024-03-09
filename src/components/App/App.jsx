import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { getContacts } from '../../redux/selectors';
import styles from './App.module.css';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Phonebook</h1>

      <ContactForm />
      {contacts.length > 0 && (
        <>
          <h2 className={styles.subtitle}>Contacts</h2>

          <Filter />
          <ContactList />
        </>
      )}
      {contacts.length === 0 && (
        <p>Your phonebook is empty. Add first contact!</p>
      )}
    </div>
  );
};

export default App;
