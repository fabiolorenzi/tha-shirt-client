import { combineReducers } from "redux";

import open_closeReducer from "./open_closeReducer.js";
import searcherReducer from "./searcherReducer.js";
import searchWordReducer from "./searchWordReducer.js";

const rootReducer = combineReducers({
    burgerButtonState: open_closeReducer,
    searcher: searcherReducer,
    searchWord: searchWordReducer
});

export default rootReducer;