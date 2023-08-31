import React from "react";
import Fighter from "./fighter";

const TeamFighters = ({ isTeamA, characters, onClickFighter, turnCount }) => {

  const team = [];

  characters.map((chara) => {
    team.push(
      <Fighter
        isTeamA={isTeamA}
        character={chara}
        onClick={onClickFighter}
        turnCount={turnCount}
      />
    )
  }
  );
  return (
    <div className="col-2">
      {team}
    </div>
  );
};

export default TeamFighters;
