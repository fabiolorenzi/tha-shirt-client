const searchWordReducer = (state = "", action) => {
    switch(action.type) {
        case "SEARCH_WORD":
            return state = action.data;
        default:
            return state;
    }
};

export default searchWordReducer;