import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => (
  <header className={styles.Searchbar}>
    <SearchForm onSubmit={onSubmit} />
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
