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
      x: Math.floor(Math.random() * 8),
      y: Math.floor(Math.random() * 8),
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
      x: Math.floor(Math.random() * 8),
      y: Math.floor(Math.random() * 8),
    }))
  );

  //キャラを選択している状態を保存する
  const [currentSelectedChara, setCurrentSelectedChara] = useState(null);
  console.log(currentSelectedChara);

  //ターン数をカウントする
  const [turnCount, setTurnCount] = useState(1);

  //状態が変化した時に呼び出す関数を定義
  const handleTeamA = (newTeamA) => {
    setTeamACharacters(newTeamA);
  };

  const handleTeamB = (newTeamB) => {
    setTeamBCharacters(newTeamB);
  };

  const handleMove = () => {
    setTurnCount(turnCount + 1);
  };

  const handleAttack = () => {
    setTurnCount(turnCount + 1);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <TeamInfo isTeamA={true} />
        </div>
        <div className="col">
          <TurnInfo turnCount={turnCount} />
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
          onClickFighter={setCurrentSelectedChara}
          turnCount={turnCount}
        />
        <div className="col-8 border border-3 border-dark">
          <HoneyComb size={55} rows={8} cols={8} teamACharacters={teamACharacters} teamBCharacters={teamBCharacters}/>
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
      <div>
        <img src={
          teamACharacters[0].image.url}
          alt="画像"
          width={90}
          height={100}
        />
        <img src={
          teamACharacters[1].image.url}
          alt="画像"
          width={90}
          height={100}
        />
        <img src={
          teamACharacters[2].image.url}
          alt="画像"
          width={90}
          height={100}
        />
        <img src={
          teamBCharacters[0].image.url}
          alt="画像"
          width={90}
          height={100}
        />
        <img src={
          teamBCharacters[1].image.url}
          alt="画像"
          width={90}
          height={100}
        />
        <img src={
          teamBCharacters[2].image.url}
          alt="画像"
          width={90}
          height={100}
        />
      </div>
    </div>
  );
}

export default App;
