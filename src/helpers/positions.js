
const setValueLimits = (value, { min = 0, max = 100 } = {}) => Math.min(Math.max(value, min), max);

const setPositionLimits = ({ top, left }, limits) => ({
    top: setValueLimits(top, limits),
    left: setValueLimits(left, limits),
});

export const getRelativeDropPosition = ({ draggable, droppable, offset }) => {
    const droppableRect = droppable.getBoundingClientRect();

    const draggableRect = {
        left: draggable.clientX - droppableRect.left - offset.left,
        top: draggable.clientY - droppableRect.top - offset.top,
    };
    
    const relativePosition = {
        left: (draggableRect.left / droppableRect.width) * 100,
        top: (draggableRect.top / droppableRect.height) * 100,
    };
    
    return setPositionLimits(relativePosition);
};

export const getOffsetPosition = ({ draggable, droppable, position }) => {
    const droppableRect = droppable.getBoundingClientRect();

    const dragStartPoint = {
        left: draggable.clientX - droppableRect.left,
        top: draggable.clientY - droppableRect.top,
    };

    const draggableRect = {
        left: (droppableRect.width / 100) * position.left,
        top: (droppableRect.height / 100) * position.top,
    };

    return {
        left: dragStartPoint.left - draggableRect.left,
        top: dragStartPoint.top - draggableRect.top,
    };
};
