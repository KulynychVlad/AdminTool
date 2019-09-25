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
    default:
        return state;
    }
};
