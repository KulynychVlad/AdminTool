import PropTypes from 'prop-types';
import React from 'react';
import ImageView from 'src/components/elements/ImageView';
import ImageCard from 'src/components/elements/ImageCard';
import ModalWrap from 'src/components/modals/ModalWrap';
import './ImageViewModal.scss';

const ImageViewModal = ({ image }) => {
    const trigger = (
        <ImageCard src={image.src}/>
    );

    return (
        <ModalWrap
            trigger={trigger}
            className='image-view__modal'
        >
            {() => <ImageView image={image}/>}
        </ModalWrap>
    );
};

ImageViewModal.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};

export default ImageViewModal;
