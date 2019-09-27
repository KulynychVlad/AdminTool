import PropTypes from 'prop-types';
import React from 'react';
import { Modal } from 'semantic-ui-react';
import ImageView from 'src/components/elements/ImageView';
import ImageCard from 'src/components/elements/ImageCard';
import { useSwitchState } from 'src/hooks/stateHooks';
import './ImageViewModal.scss';

const ImageViewModal = ({ image }) => {
    const [open, openModal, closeModal] = useSwitchState(false);

    const trigger = (
        <ImageCard src={image.src}/>
    );

    return (
        <Modal
            trigger={trigger}
            open={open}
            onOpen={openModal}
            onClose={closeModal}
            className='image-view__modal'
        >
            <ImageView image={image}/>
        </Modal>
    );
};

ImageViewModal.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};

export default ImageViewModal;
