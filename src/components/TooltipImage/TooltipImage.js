import React from 'react';
import PropTypes from 'prop-types';
import './TooltipImage.scss';
import actions from 'src/redux/actions';
import { useAction } from 'src/hooks/actionHooks';

const TooltipImage = ({ image }) => {
    const position = image.position || { top: 0, left: 0 };

    // const getScaledPosition = () => {
    //     const droppable = document.querySelector('.image-tooltip');
    //     const position = image.position || { top: 0, left: 0 };

    //     if (!droppable) return position;

    //     const rect = droppable.getBoundingClientRect();
    //     const scale = { x: rect.width / position.width, y: rect.height / position.height };
    //     console.log('scale: ', scale);

    //     return { top: position.top * scale.y, left: position.left * scale.x, width: rect.width, height: rect.height };
    // };

    const editImage = useAction(actions.editImage);

    const onDragOver = e => e.preventDefault();
    

    const onDragEnd = (e) => {
        const droppable = document.querySelector('.image-tooltip');
        const rect = droppable.getBoundingClientRect();

        const offset = JSON.parse(e.dataTransfer.getData("offset"));

        const left = e.clientX - rect.left - offset.left;
        const top = e.clientY - rect.top - offset.top;

        editImage({ ...image, position: { top: (top < 0 ? 0 : top / rect.height) * 100, left: (left < 0 ? 0 : left / rect.width) * 100 } });
    };

    const onDragStart = (e) => {
        const droppable = document.querySelector('.image-tooltip');
        const rect = droppable.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        e.dataTransfer.setData("offset", JSON.stringify({ left: x - ((rect.width / 100) * position.left), top: y - ((rect.height / 100) * position.top) }));
    };

    return (
        <div className='image-tooltip' onDragOver={onDragOver} onDrop={onDragEnd}>
            <img className='image-tooltip__img' src={image.src}/>
            <div style={{ left: `${position.left}%`, top: `${position.top}%` }} onDragStart={onDragStart} draggable='true' className='image-tooltip__tooltip'>{image.description || 'No description'}</div>
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
