import React from 'react';
import PropTypes from 'prop-types';
import './TooltipImage.scss';
import actions from 'src/redux/actions';
import { useAction } from 'src/hooks/actionHooks';

const TooltipImage = ({ image }) => {
    const position = image.position || { top: 0, left: 0 };

    const editImage = useAction(actions.editImage);

    const onDragOver = e => e.preventDefault();

    const onDragEnd = (e) => {
        const droppable = document.querySelector('.image-tooltip');
        const rect = droppable.getBoundingClientRect();

        const offset = JSON.parse(e.dataTransfer.getData("offset"));

        const left = e.clientX - rect.left - offset.left;
        const top = e.clientY - rect.top - offset.top;

        editImage({ ...image, position: { top, left } });
    };

    const onDragStart = (e) => {
        const droppable = document.querySelector('.image-tooltip');
        const rect = droppable.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        e.dataTransfer.setData("offset", JSON.stringify({ left: x - position.left, top: y - position.top }));
    };

    return (
        <div className='image-tooltip' onDragOver={onDragOver} onDrop={onDragEnd}>
            <img className='image-tooltip__img' src={image.src}/>
            <div style={position} onDragStart={onDragStart} draggable='true' className='image-tooltip__tooltip'>{image.description || 'No description'}</div>
        </div>
    );
};

TooltipImage.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};

export default TooltipImage;
