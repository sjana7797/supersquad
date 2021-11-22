import React from "react";

function CharacterList(props) {
  return (
    <div>
      <h3>{props.listName}</h3>
      <ul className="list-group">
        {props.lists.map((character) => (
          <li key={character.id} className="list-group-item">
            <div className="list-item">{character.name}</div>
            <div
              className="list-item right-button"
              onClick={() => {
                props.actions(character.id);
              }}
            >
              {props.symbol}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
