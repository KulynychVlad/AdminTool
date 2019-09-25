import React from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';
import { chunk, map } from 'lodash';

const Grid = ({ children }) => {
    return (
        <div className='grid' >
            {map(children, a => <div className='grid__item'>{a}</div>)}
        </div>
    );
};

Grid.propTypes = {

};

export default Grid;
