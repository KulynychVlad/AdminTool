import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Modal } from 'semantic-ui-react';
import ImageView from 'src/components/ImageView';
import Image from 'src/components/Image';
import './ImageViewModal.scss';

const ImageViewModal = ({ image }) => {
    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false);
    const openModal = () => setOpen(true);

    const trigger = (
        <Image src={image.src}/>
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
