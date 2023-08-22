import React from "react";

const Fighter = ({ isTeamA, character }) => {
  const teamColor = isTeamA ? "bg-danger" : "bg-primary";

  return (
    <div className={`card text-white mb-1 ${teamColor}`}>
      <div className="card-header">Fighter Name: {character.name}</div>
      <div className="card-body">
        <p className="card-text">HP: {character.hp}</p>
        <p className="card-text">AGL:</p>
        <p className="card-text">DEF:</p>
        <p className="card-text">Move:</p>
        <p className="card-text">disable:</p>
      </div>
    </div>
  );
};

export default Fighter;
