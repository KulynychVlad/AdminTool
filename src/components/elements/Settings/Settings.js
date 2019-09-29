import React, { useState } from 'react';
import './Settings.scss';
import { HuePicker } from 'react-color';
import { useSelector } from 'react-redux';
import { useAction } from 'src/hooks/actionHooks';
import actions from 'src/redux/actions';
import { getTooltipsColorState } from 'src/redux/selectors/settingsSelectors';
import ExampleImage from 'src/static/images/example.jpg';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Settings = ({ afterSubmit }) => {
    const tooltipsColor = useSelector(getTooltipsColorState);
    const [color, setColor] = useState(tooltipsColor);
    const changeTooltipsColor = useAction(actions.changeTooltipsColor);

    const handleSubmit = () => {
        changeTooltipsColor(color);
        afterSubmit();
    };

    return (
        <div className='settings'>
            <HuePicker width={250} color={color} onChange={colors => setColor(colors.hex)}/>
            <div className='settings__example'>
                <div style={{ backgroundColor: color }} className='settings__example__tooltip'>Example text</div>
                <img className='settings__example__image' src={ExampleImage}/>
            </div>
            <Button onClick={handleSubmit} className='settings__submit' content='ACCEPT' fluid color='green'/>
        </div>
    );
};

Settings.propTypes = {
    afterSubmit: PropTypes.func,
};

Settings.defaultProps = {
    afterSubmit: () => {},
};

export default Settings;
