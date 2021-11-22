import React from "react";

import { connect } from "react-redux";

function SquadStats(props) {
  let stats = {
    strength: 0,
    intelligence: 0,
    speed: 0,
  };

  const addStats = () => {
    props.heroes.forEach((hero) => {
      stats.strength += hero.strength;
      stats.intelligence += hero.intelligence;
      stats.speed += hero.speed;
    });
  };

  addStats();
  return (
    <div>
      <h3>Squad Stats</h3>
      <ul className="list-group">
        <li className="list-item">
          <div className="list-group-item">
            <strong>Overall Strength : </strong>
            {stats.strength}
          </div>
        </li>
        <li className="list-item">
          <div className="list-group-item">
            <strong>Overall Intelligence : </strong>
            {stats.intelligence}
          </div>
        </li>
        <li className="list-item">
          <div className="list-group-item">
            <strong>Overall Speed : </strong>
            {stats.speed}
          </div>
        </li>
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes,
  };
}
export default connect(mapStateToProps, null)(SquadStats);
