import React from 'react';
import './AddImage.scss';
import { Icon } from 'semantic-ui-react';
import actions from 'src/redux/actions';
import { useAction } from 'src/hooks/actionHooks';

const AddImage = () => {
    const addImage = useAction(actions.addImage);

    return (
        <div className='image-wrapper image-wrapper--add' onClick={() => addImage({ image: { hadasd: 23423 } })}>
            <Icon name='add' color='grey' size='massive'/>
            <div className='image-wrapper__text--add'>Add image</div>
        </div>
    );
};

AddImage.propTypes = {

};

export default AddImage;
