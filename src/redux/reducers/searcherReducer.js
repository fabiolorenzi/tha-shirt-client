const searcherReducer = (state = false, action) => {
    switch(action.type) {
        case "SEARCHER":
            return state = action.data;
        default:
            return state;
    };
};

export default searcherReducer;