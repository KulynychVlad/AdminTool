import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({ src }) => {
    return (
        <div className='image-wrapper'>
            <img src={src || 'https://www.w3schools.com/w3css/img_lights.jpg'} />
        </div>
    );
};

Image.propTypes = {

};

export default Image;
