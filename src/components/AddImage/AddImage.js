import React from 'react';
import './AddImage.scss';
import { Icon, Modal } from 'semantic-ui-react';
import AddImageForm from 'src/components/AddImageForm';

const AddImage = () => {
    const trigger = (
        <div className='image-wrapper image-wrapper--add'>
            <Icon name='add' color='grey' size='massive'/>
            <div className='image-wrapper__text--add'>Add image</div>
        </div>
    );

    return (
        <Modal
            centered={false}
            trigger={trigger}
        >
            <Modal.Header>Add image</Modal.Header>
            <Modal.Content>            
                <AddImageForm/>
            </Modal.Content>
        </Modal>
    );
};

AddImage.propTypes = {

};

export default AddImage;
