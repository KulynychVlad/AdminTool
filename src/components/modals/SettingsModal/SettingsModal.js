import React from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import Settings from 'src/components/elements/Settings';
import { useSwitchState } from 'src/hooks/stateHooks';
import './SettingsModal.scss';

const SettingsModal = () => {
    const [open, openModal, closeModal] = useSwitchState(false);

    const trigger = (
        <Icon link name='setting' size='large' inverted/>
    );

    return (
        <Modal
            trigger={trigger}
            open={open}
            centered={false}
            onOpen={openModal}
            onClose={closeModal}
            className='image-view__modal'
        >
            <Modal.Header>Settings</Modal.Header>
            <Modal.Content>      
                <Settings afterSubmit={closeModal}/>      
            </Modal.Content>
        </Modal>
    );
};

export default SettingsModal;
