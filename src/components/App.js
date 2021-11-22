import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Components
import CharacterList from "./CharacterList";
import SquadStats from "./SquadStats";

//Actions
import { addCharacterById } from "../redux/actions";
import { removeCharacterById } from "../redux/actions";

function App(props) {
  const charactersHeading = "Characters";
  const heroesHeading = "Your Squad Heroes";
  return (
    <div className="App">
      <h1>SuperSquad</h1>
      <div className="row mt-3">
        <div className="col-md-4">
          <CharacterList
            listName={charactersHeading}
            lists={props.characters}
            actions={props.addCharacterById}
            symbol={"+"}
          />
        </div>
        <div className="col-md-4">
          <CharacterList
            listName={heroesHeading}
            lists={props.heroes}
            actions={props.removeCharacterById}
            symbol={"x"}
          />
        </div>
        <div className="col-md-4">
          <SquadStats />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    characters: state.characters,
    heroes: state.heroes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addCharacterById, removeCharacterById },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
