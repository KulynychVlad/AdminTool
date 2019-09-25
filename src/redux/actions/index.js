import { generateActions } from 'src/redux/actions/actionGenerator';

const actions = {
    images: ['GET_IMAGES'],
};

export default generateActions(actions);
