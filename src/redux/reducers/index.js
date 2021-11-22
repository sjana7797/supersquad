import { combineReducers } from "redux";

import { characters } from "./characters_reducer";
import { heroes } from "./heroes_reducer";

//Combining the reducer
let rootReducer = combineReducers({
    characters,
    heroes,
});

export default rootReducer;