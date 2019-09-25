import React from 'react';
import './Image.scss';

const Image = (props) => {
    return (
        <div className='image-wrapper'>
            <img {...props}/>
        </div>
    );
};

Image.defaultProps = {
    src: 'https://www.w3schools.com/w3css/img_lights.jpg',
};

export default Image;
