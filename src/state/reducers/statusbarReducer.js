const reducer = (state="dark-content", action) => {
    switch (action.type) {
        case "setTheme":
            return action.payload;
        default:
            return state;
    }
}

export default reducer;