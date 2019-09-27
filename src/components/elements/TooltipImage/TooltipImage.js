import React from 'react';
import PropTypes from 'prop-types';
import './TooltipImage.scss';
import actions from 'src/redux/actions';
import { useAction } from 'src/hooks/actionHooks';
import { getRelativeDropPosition, getOffsetPosition } from 'src/helpers/positions';

const TooltipImage = ({ image }) => {
    const position = image.position || { top: 0, left: 0 };

    const editImage = useAction(actions.editImage);

    const onDragEnd = (draggable) => {
        const droppable = document.querySelector('.image-tooltip');
        const offset = JSON.parse(draggable.dataTransfer.getData("offset"));

        const relativePosition = getRelativeDropPosition({ droppable, draggable, offset });

        editImage({ ...image, position: relativePosition });
    };

    const onDragStart = (draggable) => {
        const droppable = document.querySelector('.image-tooltip');

        const offset = getOffsetPosition({ draggable, droppable, position });

        draggable.dataTransfer.setData("offset", JSON.stringify(offset));
    };

    return (
        <div
            className='image-tooltip'
            onDragOver={e => e.preventDefault()}
            onDrop={onDragEnd}
        >
            <img className='image-tooltip__img' src={image.src}/>
            <div
                style={{ left: `${position.left}%`, top: `${position.top}%` }}
                onDragStart={onDragStart}
                draggable='true'
                className='image-tooltip__tooltip'
            >
                {image.description || 'No description'}
            </div>
        </div>
    );
};

TooltipImage.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        description: PropTypes.string,
        position: PropTypes.object,
    }).isRequired,
};

export default TooltipImage;
