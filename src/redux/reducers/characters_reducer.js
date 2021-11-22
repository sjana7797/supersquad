//Importing Datas
import characters_json from "../data/characters.json";

//importing Types
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions/type";
import { removeHero } from "./helpers";

//Characters Reducer

export function characters(state = characters_json, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            let characters = state.filter((item) => item.id !== action.id);
            return characters;
        case REMOVE_CHARACTER:
            let charactersRemove = [...state, removeHero(action.id)];
            return charactersRemove;
        default:
            return state;
    }
}