export const lightStatusbar = () => {
    return dispatch => {
        dispatch({ type: 'setTheme', payload: 'light-content' });
    };
};

export const darkStatusbar = () => {
    return dispatch => {
        dispatch({ type: 'setTheme', payload: 'dark-content' });
    };
};
