import "./App.css";
import TeamFighters from "./teamFighters";
import TeamInfo from "./teamInfo";
import TurnInfo from "./turnInfo";
import BattleInfo from "./battleInfo";
import UnderBar from "./underBar";
import HoneyComb from "./honeyComb";
import { teamA } from "./data/fighters";
import { useState } from "react";

function App() {
  const [charaA1, setCharaA1] = useState({
    name: teamA[0].name,
    hp: teamA[0].hp,
    agl: teamA[0].agl,
  });
  const [charaA2, setCharaA2] = useState({
    name: teamA[1].name,
    hp: teamA[1].hp,
    agl: teamA[1].agl,
  });
  const [charaA3, setCharaA3] = useState({
    name: teamA[2].name,
    hp: teamA[2].hp,
    agl: teamA[2].agl,
  });

  const teamACharacters = [charaA1, charaA2, charaA3];
  const teamBCharacters = teamACharacters;

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <TeamInfo isTeamA={true} />
        </div>
        <div className="col">
          <TurnInfo />
        </div>
        <div className="col">
          <BattleInfo isTeamA={false} />
        </div>
        <div className="col-2">
          <TeamInfo isTeamA={false} />
        </div>
      </div>
      <div className="row">
        <TeamFighters isTeamA={true} characters={teamACharacters} />
        <div className="col-8 border border-3 border-dark">
          <HoneyComb size={55} rows={8} cols={8} />
        </div>
        <TeamFighters isTeamA={false} characters={teamBCharacters} />
      </div>
      <UnderBar />
    </div>
  );
}

export default App;
