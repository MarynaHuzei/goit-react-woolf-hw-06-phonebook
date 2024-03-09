import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import { removeContact } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className={styles.list}>
        {contacts.map((contact, index) => (
          <li key={`${contact.id}-${index}`}>
            {`${contact.name} : ${contact.number}`}
            <button
              type="button"
              name="delete"
              onClick={() => {
                dispatch(removeContact(contact));
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
