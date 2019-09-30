import React from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useSwitchState } from 'src/hooks/stateHooks';

const ModalWrap = ({ children, ...restProps }) => {
    const [open, openModal, closeModal] = useSwitchState(false);

    return (
        <Modal
            open={open}
            centered={false}
            onOpen={openModal}
            onClose={closeModal}
            {...restProps}
        >
            {children({ closeModal })}
        </Modal>
    );
};

ModalWrap.propTypes = {
    children: PropTypes.func.isRequired, 
};

export default ModalWrap;
