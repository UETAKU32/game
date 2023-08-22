import React from "react";
import Fighter from "./fighter";

const TeamFighters = ({ isTeamA, characters }) => {
  return (
    <div className="col-2">
      <Fighter isTeamA={isTeamA} character={characters[0]} />
      <Fighter isTeamA={isTeamA} character={characters[1]} />
      <Fighter isTeamA={isTeamA} character={characters[2]} />
    </div>
  );
};

export default TeamFighters;
