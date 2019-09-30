import React from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import Settings from 'src/components/elements/Settings';
import ModalWrap from 'src/components/modals/ModalWrap';
import './SettingsModal.scss';

const SettingsModal = () => {
    const trigger = (
        <Icon link name='setting' size='large' inverted/>
    );

    return (
        <ModalWrap
            trigger={trigger}
            centered={false}
            className='image-view__modal'
        >
            {({ closeModal }) => (
                <>
                    <Modal.Header>Settings</Modal.Header>
                    <Modal.Content>      
                        <Settings afterSubmit={closeModal}/>      
                    </Modal.Content>
                </>
            )} 
        </ModalWrap>
    );
};

export default SettingsModal;
