import "./App.css";
import TeamFighters from "./teamFighters";
import TeamInfo from "./teamInfo";
import TurnInfo from "./turnInfo";
import BattleInfo from "./battleInfo";
import UnderBar from "./underBar";
import HoneyComb from "./honeyComb";
import { teamA } from "./data/fightersData";
import { teamB } from "./data/fightersData";
import { useState } from "react";

function App() {
  //キャラクターデータをuseStateに宣言
  const [teamACharacters, setTeamACharacters] = useState(
    teamA.map((chara) => ({
      name: chara.name,
      hp: chara.hp,
      agl: chara.agl,
      def: chara.def,
      move: chara.move,
      disable: 0,
    }))
  );
  const [teamBCharacters, setTeamBCharacters] = useState(
    teamB.map((chara) => ({
      name: chara.name,
      hp: chara.hp,
      agl: chara.agl,
      def: chara.def,
      move: chara.move,
      disable: 0,
    }))
  );

  const [currentSelectedChara, setCurrentSelectedChara] = useState(null);
  const [turnCount, setTurnCount] = useState(1);

  //状態が変化した時に呼び出す関数を定義
  const handleTeamA = (newTeamA) => {
    setTeamACharacters(newTeamA);
  };

  const handleTeamB = (newTeamB) => {
    setTeamBCharacters(newTeamB);
  };

  const handleMove = () => {
    //TODO: turnを1増やす
  };

  const handleAttack = () => {
    //TODO: turnを1増やす
  };

  console.log({ turnCount });

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
        {/**TODO:ターンによって、どちらからのTeamFightersは選択不可（色がdisabledで選択自体不可 or 選択するとアラートが出る） */}
        <TeamFighters
          isTeamA={true}
          characters={teamACharacters}
          onClickFighter={setCurrentSelectedChara}
        />
        <div className="col-8 border border-3 border-dark">
          <HoneyComb size={55} rows={8} cols={8} />
        </div>
        <TeamFighters
          isTeamA={false}
          characters={teamBCharacters}
          onClickFighter={setCurrentSelectedChara}
        />
      </div>
      <UnderBar
        teamACharacters={teamACharacters}
        onChange={handleTeamA}
        onMove={handleMove}
        onAttack={handleAttack}
      />
    </div>
  );
}

export default App;