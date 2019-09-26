import React from 'react';
import './Image.scss';

const Image = (props) => {
    return (
        <div className='image-wrapper'>
            <img {...props}/>
        </div>
    );
};

export default Image;
