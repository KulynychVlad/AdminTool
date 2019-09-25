import React from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

const Grid = ({ children }) => {
    return (
        <div className='grid' >
            {children.map(item => <div className='grid__item'>{item}</div>)}
        </div>
    );
};

Grid.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

Grid.defaultProps = {
    children: [],
};

export default Grid;
