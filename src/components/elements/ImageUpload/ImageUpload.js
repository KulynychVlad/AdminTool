import React, { useRef } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { getImageDataUrl } from 'src/helpers/image';
import './ImageUpload.scss';

const ImageUpload = ({ onChange }) => {
    const inputRef = useRef(null);

    const onImageChange = e => getImageDataUrl(e, onChange);

    const handleClick = () => inputRef.current && inputRef.current.click();

    return (
        <>
            <input className='image-upload__input' ref={inputRef} type='file' placeholder='Image' accept="image/*" onChange={onImageChange}/>
            <Button primary icon='image' onClick={handleClick} type='button'/>
        </>
    );
};

ImageUpload.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default ImageUpload;
