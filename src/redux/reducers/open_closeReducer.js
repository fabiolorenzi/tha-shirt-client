const open_closeReducer = (state = false, action) => {
    switch (action.type) {
        case "OPEN_CLOSE":
            return state = !state;
        default:
            return state;
    }
};

export default open_closeReducer;