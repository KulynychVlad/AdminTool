import React from 'react';
import './Header.scss';
import SettingsModal from 'src/components/modals/SettingsModal/SettingsModal';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__title'>Admin Tool</div>
            <SettingsModal/>
        </div>
    );
};

export default Header;
