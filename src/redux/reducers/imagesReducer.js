import actions from 'src/redux/actions';

export const initialState = {
    loading: false,
    data: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
    case actions.GET_IMAGES: return { ...state, loading: true };
    case actions.GET_IMAGES_SUCCESS: return { ...state, loading: false, data: action.payload };
    case actions.GET_IMAGES_ERROR: return initialState;

    case actions.ADD_IMAGE_SUCCESS: return { ...state, data: [...state.data, action.payload] };

    case actions.DELETE_IMAGE_SUCCESS: return { ...state, data: state.data.filter(image => image.id !== action.payload.id) };

    case actions.EDIT_IMAGE_SUCCESS: return { ...state, data: state.data.map(image => (image.id === action.payload.id ? action.payload : image)) };
    default:
        return state;
    }
};
