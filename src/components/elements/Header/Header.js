import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Header.scss';
import { getUsedLocalStorageSize } from 'src/helpers/localeStorage';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__title'>Admin Tool</div>
            <div>{`${getUsedLocalStorageSize()} MB / 10 MB`}</div>
            <Icon link name='setting' size='large'/>
        </div>
    );
};

export default Header;
