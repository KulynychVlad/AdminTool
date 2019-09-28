import React from 'react';
import './ImageCard.scss';
import Image from 'src/components/elements/Image';

const ImageCard = (props) => {
    return (
        <div className='image-wrapper'>
            <Image {...props}/>
        </div>
    );
};

export default ImageCard;
