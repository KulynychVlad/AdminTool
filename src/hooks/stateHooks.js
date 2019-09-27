import { useState } from 'react';

export const useSwitchState = (initialValue) => {
    const [state, setState] = useState(initialValue);

    const switchToFalse = () => setState(false);
    const switchToTrue = () => setState(true);

    return [state, switchToTrue, switchToFalse];
};

export const useToggleState = (initialValue) => {
    const [state, setState] = useState(initialValue);

    const toggleState = () => setState(!state);

    return [state, toggleState];
};
