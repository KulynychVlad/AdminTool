import actions from 'src/redux/actions';

export const initialState = {
    tooltipsColor: '#ffffff',
};

export default (state = initialState, action) => {
    switch (action.type) {
    case actions.CHANGE_TOOLTIPS_COLOR: return { ...state, tooltipsColor: action.payload };
    default:
        return state;
    }
};
