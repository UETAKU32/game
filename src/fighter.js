import React from "react";

const Fighter = ({ isTeamA, character }) => {
  const teamColor = isTeamA ? "bg-danger" : "bg-primary";

  return (
    <div className={`card text-white mb-1 ${teamColor}`}>
      <div className="card-header">{character.name}</div>
      <div className="card-body">
        <p className="card-text">体: {character.hp}</p>
        <p className="card-text">移:{character.agl}</p>
        <p className="card-text">防:{character.def}</p>
        <p className="card-text">技:{character.move.name}(攻{character.move.atk},ダ{character.move.dmg},射{character.move.range})</p>
        <p className="card-text">痺:{character.disable}</p>
      </div>
    </div>
  );
};

export default Fighter;
