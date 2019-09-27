import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__title'>Admin Tool</div>
            <Icon link name='setting' size='large'/>
        </div>
    );
};

export default Header;
