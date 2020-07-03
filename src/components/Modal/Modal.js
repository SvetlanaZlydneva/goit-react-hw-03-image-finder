/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { url, description } = this.props;
    return createPortal(
      <div
        role="button"
        tabIndex="0"
        className={styles.Overlay}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.Modal}>
          <img src={url} alt={description} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
