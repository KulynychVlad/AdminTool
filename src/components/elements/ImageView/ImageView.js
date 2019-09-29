import React from 'react';
import PropTypes from 'prop-types';
import './ImageView.scss';
import { Icon, Loader } from 'semantic-ui-react';
import { useAction, useLoadingAction } from 'src/hooks/actionHooks';
import actions from 'src/redux/actions';
import ImageForm from 'src/components/forms/ImageForm';
import TooltipImage from 'src/components/elements/TooltipImage';
import { useToggleState } from 'src/hooks/stateHooks';


const ImageView = ({ image }) => {
    const [editMode, toggleMode] = useToggleState(false);

    const [loading, loadingDeleteImage] = useLoadingAction(actions.deleteImage);
    const editImage = useAction(actions.editImage);

    return (
        <div className='image-view'>
            {editMode
                ? (
                    <div className='image-view__form'>
                        <ImageForm afterSubmit={toggleMode} onSubmit={editImage} initialValues={image}/>
                    </div>
                ) : (
                    <>
                        <TooltipImage image={image}/>
                        {loading && <Loader active/>}
                    </>
                )}
            <div className='image-view__toolbar'>
                <Icon name='pencil' circular inverted link onClick={toggleMode}/>
                {!editMode && <Icon name='delete' color='red' circular inverted link onClick={() => loadingDeleteImage(image)}/>} 
            </div>
        </div>
    );
};

ImageView.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};

export default ImageView;
