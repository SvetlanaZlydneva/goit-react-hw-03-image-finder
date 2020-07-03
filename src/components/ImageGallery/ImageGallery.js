import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    showModal: false,
    description: '',
    largeImage: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  showModal = event => {
    event.preventDefault();
    const { href, dataset } = event.currentTarget;
    this.setState({
      description: dataset.attr,
      largeImage: href,
    });
    this.toggleModal();
  };

  closeModal = () => {
    this.setState({
      description: '',
      largeImage: '',
    });
    this.toggleModal();
  };

  render() {
    const { images } = this.props;
    const { showModal, largeImage, description } = this.state;
    return (
      <>
        {showModal && (
          <Modal
            url={largeImage}
            description={description}
            closeModal={this.closeModal}
          />
        )}
        <ul className={styles.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <li className={styles.ImageGalleryItem} key={id}>
              <ImageGalleryItem
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                description={tags}
                onClick={this.showModal}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
