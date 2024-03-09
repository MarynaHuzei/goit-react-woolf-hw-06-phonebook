import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name' && /\d/.test(value)) {
      alert(
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      );
      return;
    }
    if (name === 'number' && !/^[\d\s()+-]*$/.test(value)) {
      alert(
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      );
      return;
    }
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = formData;
    onSubmit(name, number);
    setFormData({ name: '', number: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="number">Phone Number:</label>
      <input
        type="tel"
        name="number"
        value={formData.number}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
