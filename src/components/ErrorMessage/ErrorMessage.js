import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
  <div className={styles.ErrorMessage}>
    Whoops, something went wrong: {message}
  </div>
);

ErrorMessage.defaultProps = {
  message: 'images not found',
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
