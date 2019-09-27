import React from 'react';
import './AddImageModal.scss';
import { Icon, Modal } from 'semantic-ui-react';
import ImageForm from 'src/components/forms/ImageForm';
import actions from 'src/redux/actions';
import { useAction } from 'src/hooks/actionHooks';
import { useSwitchState } from 'src/hooks/stateHooks';

const AddImageModal = () => {
    const [open, openModal, closeModal] = useSwitchState(false);
    
    const addImage = useAction(actions.addImage);

    const trigger = (
        <div className='image-wrapper image-wrapper--add'>
            <Icon name='add' color='grey' size='massive'/>
            <div className='image-wrapper__text--add'>Add image</div>
        </div>
    );

    return (
        <Modal
            trigger={trigger}
            open={open}
            onOpen={openModal}
            onClose={closeModal}
        >
            <Modal.Header>Add image</Modal.Header>
            <Modal.Content>            
                <ImageForm onSubmit={addImage} afterSubmit={closeModal}/>
            </Modal.Content>
        </Modal>
    );
};

export default AddImageModal;
