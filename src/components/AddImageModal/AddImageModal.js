import React, { useState } from 'react';
import './AddImageModal.scss';
import { Icon, Modal } from 'semantic-ui-react';
import AddImageForm from 'src/components/AddImageForm';
import actions from 'src/redux/actions';
import { useAction } from 'src/hooks/actionHooks';

const AddImageModal = () => {
    const [open, setOpen] = useState(false);
    
    const addImage = useAction(actions.addImage);

    const closeModal = () => setOpen(false);
    const openModal = () => setOpen(true);

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
                <AddImageForm onSubmit={addImage} afterSubmit={closeModal}/>
            </Modal.Content>
        </Modal>
    );
};

AddImageModal.propTypes = {

};

export default AddImageModal;
