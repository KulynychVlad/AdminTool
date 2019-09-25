import { generateActions } from 'src/redux/actions/actionGenerator';

const actions = {
    images: ['GET_IMAGES', 'ADD_IMAGE'],
};

export default generateActions(actions);
