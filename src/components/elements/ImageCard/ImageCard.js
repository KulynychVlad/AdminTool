import React from 'react';
import './ImageCard.scss';

const ImageCard = (props) => {
    return (
        <div className='image-wrapper'>
            <img {...props}/>
        </div>
    );
};

export default ImageCard;
