import { generateActions } from 'src/redux/actions/actionGenerator';

const actions = {
    images: ['GET_IMAGES', 'ADD_IMAGE', 'DELETE_IMAGE', 'EDIT_IMAGE'],
    settings: ['CHANGE_TOOLTIPS_COLOR'],
};

export default generateActions(actions);
