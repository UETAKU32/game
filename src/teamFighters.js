import React from "react";
import Fighter from "./fighter";

const TeamFighters = ({ isTeamA, characters, onClickFighter }) => {
  return (
    <div className="col-2">
      <Fighter
        isTeamA={isTeamA}
        character={characters[0]}
        onClick={onClickFighter}
      />
      <Fighter
        isTeamA={isTeamA}
        character={characters[1]}
        onClick={onClickFighter}
      />
      <Fighter
        isTeamA={isTeamA}
        character={characters[2]}
        onClick={onClickFighter}
      />
    </div>
  );
};

export default TeamFighters;
