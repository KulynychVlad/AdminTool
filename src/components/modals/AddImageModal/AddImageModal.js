import React from 'react';
import './AddImageModal.scss';
import { Icon, Modal } from 'semantic-ui-react';
import ImageForm from 'src/components/forms/ImageForm';
import actions from 'src/redux/actions';
import { useAction } from 'src/hooks/actionHooks';
import ModalWrap from 'src/components/modals/ModalWrap';

const AddImageModal = () => {    
    const addImage = useAction(actions.addImage);

    const trigger = (
        <div className='image-wrapper image-wrapper--add'>
            <Icon name='add' color='grey' size='massive'/>
            <div className='image-wrapper__text--add'>Add image</div>
        </div>
    );

    return (
        <ModalWrap
            trigger={trigger}
            centered={false}
        >
            {({ closeModal }) => (
                <>
                    <Modal.Header>Add image</Modal.Header>
                    <Modal.Content>            
                        <ImageForm onSubmit={addImage} afterSubmit={closeModal}/>
                    </Modal.Content>
                </>
            )}
        </ModalWrap>
    );
};

export default AddImageModal;
