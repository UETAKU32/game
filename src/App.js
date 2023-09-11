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
      image: chara.image,
      disable: 0,
      row: Math.floor(Math.random() * 8),
      col: Math.floor(Math.random() * 8),
    }))
  );
  const [teamBCharacters, setTeamBCharacters] = useState(
    teamB.map((chara) => ({
      name: chara.name,
      hp: chara.hp,
      agl: chara.agl,
      def: chara.def,
      move: chara.move,
      image: chara.image,
      disable: 0,
      row: Math.floor(Math.random() * 8),
      col: Math.floor(Math.random() * 8),
    }))
  );

  //キャラを選択している状態を保存する
  const [currentSelectedChara, setCurrentSelectedChara] = useState(null);

  //ターン数をカウントする
  const [turnCount, setTurnCount] = useState(1);

  //「ユーザに求める操作」を管理するstate
  //CHARACTER_SELECTION -> ACTION_SELECTION -> MOVE_SELECTION -> NEXT -> CHARACTER_SELECTION -> ACTION_SELECTION -> ..
  const [gameStatus, setGameStatus] = useState("CHARACTER_SELECTION");
  //状態が変化した時に呼び出す関数を定義
  const handleTeamA = (newTeamA) => {
    setTeamACharacters(newTeamA);
  };

  const handleTeamB = (newTeamB) => {
    setTeamBCharacters(newTeamB);
  };

  const handleMove = () => {
    if (!currentSelectedChara) {
      alert("キャラクターを先に選択してください");
      return;
    }
    setGameStatus("MOVE_SELECTION");
  };

  const handleAttack = () => {
    if (!currentSelectedChara) {
      alert("キャラクターを先に選択してください");
      return;
    }
    setGameStatus("ATTACK_SELECTION");
  };

  const onClickFighter = (clickedFighter) => {
    setCurrentSelectedChara(clickedFighter);
    setGameStatus("ACTION_SELECTION");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <TeamInfo isTeamA={true} />
        </div>
        <div className="col">
          <TurnInfo turnCount={turnCount} gameStatus={gameStatus} />
        </div>
        <div className="col">
          <BattleInfo turnCount={turnCount} />
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
          onClickFighter={onClickFighter}
          turnCount={turnCount}
        />
        <div className="col-8 border border-3 border-dark">
          <HoneyComb
            size={55}
            rows={8}
            cols={8}
            teamACharacters={teamACharacters}
            teamBCharacters={teamBCharacters}
            selectedChara={currentSelectedChara}
            gameStatus={gameStatus}
          />
        </div>
        <TeamFighters
          isTeamA={false}
          characters={teamBCharacters}
          onClickFighter={setCurrentSelectedChara}
          turnCount={turnCount}
        />
      </div>
      <UnderBar
        teamACharacters={teamACharacters}
        onChange={handleTeamA}
        onMove={handleMove}
        onAttack={handleAttack}
        turnCount={turnCount}
      />
    </div>
  );
}

export default App;
