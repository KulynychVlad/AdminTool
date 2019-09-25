import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export const useAction = (action) => {
    const dispatch = useDispatch();
    const callback = useMemo(() => payload => dispatch(action({ payload })), [action]);

    return callback;
};
