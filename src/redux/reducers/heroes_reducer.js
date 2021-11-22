//importing Types
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions/type";

//Helpers
import { addHero } from "./helpers";

//Heroes Reducer
export function heroes(state = [], action) {
    switch (action.type) {
        case ADD_CHARACTER:
            let heroes = [...state, addHero(action.id)];
            return heroes;
        case REMOVE_CHARACTER:
            let removeHeroes = state.filter((item) => item.id !== action.id);
            return removeHeroes;
        default:
            return state;
    }
}