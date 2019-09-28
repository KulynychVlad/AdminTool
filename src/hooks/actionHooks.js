import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { useLoadingState } from './stateHooks';

const getPromisedCallback = (dispatch, action) => payload => new Promise((resolve, reject) => dispatch(action({ payload, resolve, reject })));

export const useAction = (action) => {
    const dispatch = useDispatch();
    const callback = useMemo(() => getPromisedCallback(dispatch, action), [action, dispatch]);

    return callback;
};

export const useLoadingAction = (action, initialValue) => useLoadingState(useAction(action), initialValue);
