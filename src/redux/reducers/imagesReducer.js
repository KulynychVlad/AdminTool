import actions from 'src/redux/actions';

export const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
    case actions.GET_IMAGES_SUCCESS: return action.payload;
    case actions.ADD_IMAGE_SUCCESS: return [...state, action.payload];
    case actions.DELETE_IMAGE_SUCCESS: return state.filter(image => image.id !== action.payload.id);
    case actions.EDIT_IMAGE_SUCCESS: return state.map(image => (image.id === action.payload.id ? action.payload : image));
    default:
        return state;
    }
};
