import React from 'react';
import BrokenImage from 'src/static/images/broken.png';

const onImageError = (e) => {
    e.target.src = BrokenImage;
};

const Image = (props) => {
    return (
        <img alt='Not found' {...props} onError={onImageError}/>
    );
};


export default Image;
