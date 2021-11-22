import { ADD_CHARACTER } from "./type";
import { REMOVE_CHARACTER } from "./type";
export function addCharacterById(id) {
    const action = {
        type: ADD_CHARACTER,
        id,
    };
    return action;
}

export function removeCharacterById(id) {
    const action = {
        type: REMOVE_CHARACTER,
        id,
    };
    return action;
}