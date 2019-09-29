import { combineReducers } from 'redux';
import imagesReducer from './imagesReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
    images: imagesReducer,
    settings: settingsReducer,
});
