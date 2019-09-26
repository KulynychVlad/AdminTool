import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ImageView.scss';
import { Icon } from 'semantic-ui-react';
import { useAction } from 'src/hooks/actionHooks';
import actions from 'src/redux/actions';
import AddImageForm from 'src/components//AddImageForm';

const ImageView = ({ image }) => {
    const [editMode, setEditMode] = useState(false);

    const deleteImage = useAction(actions.deleteImage);
    const editImage = useAction(actions.editImage);

    return (
        <div className='image-view'>
            {editMode ? (
                <div className='image-view__form'>
                    <AddImageForm afterSubmit={() => setEditMode(false)} onSubmit={editImage} initialValues={image}/>
                </div>
            ) : <img className='image-view__img' src={image.src}/>}
            <div className='image-view__toolbar'>
                <Icon name='pencil' circular inverted link onClick={() => setEditMode(!editMode)}/>
                {!editMode && (
                <>
                    <Icon name='mouse pointer' circular inverted link/>
                    <Icon name='delete' color='red' circular inverted link onClick={() => deleteImage(image)}/>

                </>
                )} 
            </div>
        </div>
    );
};

ImageView.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};

export default ImageView;
