import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <input
    className={styles.filter}
    type="text"
    placeholder="Search contacts..."
    value={value}
    onChange={onChange}
  />
);

export default Filter;
