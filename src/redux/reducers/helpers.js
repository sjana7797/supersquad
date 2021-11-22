//Importing Datas
import characters_json from "../data/characters.json";

export function addHero(id) {
    let hero = characters_json.find((item) => item.id === id);
    return hero;
}

export function removeHero(id) {
    let hero = characters_json.find((item) => item.id === id);
    return hero;
}