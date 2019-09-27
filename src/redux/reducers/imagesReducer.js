import actions from 'src/redux/actions';

export const initialState = {
    loading: false,
    data: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
    case actions.GET_IMAGES: 
    case actions.ADD_IMAGE: 
    case actions.DELETE_IMAGE:
    case actions.EDIT_IMAGE: return { ...state, loading: true };

    case actions.ADD_IMAGE_ERROR:
    case actions.DELETE_IMAGE_ERROR:
    case actions.EDIT_IMAGE_ERROR: return { ...state, loading: false };
    case actions.GET_IMAGES_ERROR: return initialState;

    case actions.GET_IMAGES_SUCCESS: return { ...state, loading: false, data: action.payload };
    case actions.ADD_IMAGE_SUCCESS: return { ...state, loading: false, data: [...state.data, action.payload] };
    case actions.DELETE_IMAGE_SUCCESS: return { ...state, loading: false, data: state.data.filter(image => image.id !== action.payload.id) };
    case actions.EDIT_IMAGE_SUCCESS: return { ...state, loading: false, data: state.data.map(image => (image.id === action.payload.id ? action.payload : image)) };
    default:
        return state;
    }
};
