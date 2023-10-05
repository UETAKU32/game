import "./App.css";
import TeamFighters from "./teamFighters";
import TeamInfo from "./teamInfo";
import TurnInfo from "./turnInfo";
import BattleInfo from "./battleInfo";
import UnderBar from "./underBar";
import HoneyComb from "./honeyComb";
import { teamA } from "./data/fightersData";
import { teamB } from "./data/fightersData";
import { useEffect, useState } from "react";

function App() {
  //キャラクターデータをuseStateに宣言
  const [allCharactersStatus, setAllCharactersStatusOrigin] = useState({
    teamA: teamA.map((chara) => ({
      name: chara.name,
      hp: chara.hp,
      agl: chara.agl,
      def: chara.def,
      move: chara.move,
      image: chara.image,
      disable: 0,
      row: Math.floor(Math.random() * 8),
      col: Math.floor(Math.random() * 8),
      isDead: false,
    })),
    teamB: teamB.map((chara) => ({
      name: chara.name,
      hp: chara.hp,
      agl: chara.agl,
      def: chara.def,
      move: chara.move,
      image: chara.image,
      disable: 0,
      row: Math.floor(Math.random() * 8),
      col: Math.floor(Math.random() * 8),
      isDead: false,
    })),
  });

  //勝利点の記録
  const [victoryPoints, setVictoryPoints] = useState({
    teamA: 0, //Review: teamAはteamAのキャラ配列と命名が被るため、ややこしくなりそう。teamAPoint？とかにしたほうがいいかも
    teamB: 0,
  });

  const setAllCharactersStatus = ({ teamA: newTeamA, teamB: newTeamB }) => {
    console.log("setAllCharacters has called!"); //tmp: １回呼ばれる。正しい

    //例、prevTeamA(直前のチームA)で生きてたが、newTeamA(新たにセットされるチームA)で死んでるやつがいれば
    //チームBに１点
    setAllCharactersStatusOrigin(({ teamA: prevTeamA, teamB: prevTeamB }) => {
      //FIXME: 意図せず２回呼ばれる。解決しない場合は、勝利ポイント加算処理を、攻撃時に行う？
      console.log("setAllCharactersStatusOrigin has called!"); //tmp: 2回呼ばれる。こいつがおかしい
      const deadCountA =
        newTeamA.filter(({ hp }) => hp <= 0).length -
        prevTeamA.filter(({ hp }) => hp <= 0).length;
      const deadCountB =
        newTeamB.filter(({ hp }) => hp <= 0).length -
        prevTeamB.filter(({ hp }) => hp <= 0).length;
      console.log({
        deadCountA,
        prevTeamBPoint: prevTeamB.teamB,
        prevDeadANum: prevTeamA.filter(({ hp }) => hp <= 0).length,
        newDeadANum: newTeamA.filter(({ hp }) => hp <= 0).length,
      });
      setVictoryPoints((prev) => {
        return {
          teamA: prev.teamA + deadCountB,
          teamB: prev.teamB + deadCountA,
        };
      });

      return {
        teamA: newTeamA.map(
          ({ name, hp, agl, def, move, image, disable, row, col, isDead }) => ({
            name,
            hp: hp > 0 ? hp : 0,
            agl,
            def,
            move,
            image,
            disable,
            row,
            col,
            isDead,
          })
        ),
        teamB: newTeamB.map(
          ({ name, hp, agl, def, move, image, disable, row, col, isDead }) => ({
            name,
            hp: hp > 0 ? hp : 0,
            agl,
            def,
            move,
            image,
            disable,
            row,
            col,
            isDead,
          })
        ),
      };
    });
  };

  //キャラを選択している状態を保存する
  const [currentSelectedChara, setCurrentSelectedChara] = useState(null);

  //ターン数をカウントする
  const [turnCount, setTurnCount] = useState(1);

  //「ユーザに求める操作」を管理するstate
  //CHARACTER_SELECTION -> ACTION_SELECTION -> MOVE_SELECTION -> NEXT -> CHARACTER_SELECTION -> ACTION_SELECTION -> ..
  const [gameStatus, setGameStatus] = useState("CHARACTER_SELECTION");

  //座標の変更の関数
  const coordinateChange = (allCharactersStatus, selectedChara, row, col) => {
    const updatedTeamA = allCharactersStatus.teamA.map((chara) => {
      if (chara.name === selectedChara.name) {
        const updatedRow = row;
        const updatedCol = col;
        return { ...chara, row: updatedRow, col: updatedCol };
      }
      return chara;
    });
    const updatedTeamB = allCharactersStatus.teamB.map((chara) => {
      if (chara.name === selectedChara.name) {
        const updatedRow = row;
        const updatedCol = col;
        return { ...chara, row: updatedRow, col: updatedCol };
      }
      return chara;
    });
    setAllCharactersStatus({ teamA: updatedTeamA, teamB: updatedTeamB });
  };

  //選択する順番（フェイズ）を制御する関数
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

  //手番が終了したら呼び出し、ターン数を追加し、状態をリセットする
  const turnFinish = () => {
    setCurrentSelectedChara(null);
    setTurnCount(turnCount + 1);
    setGameStatus("CHARACTER_SELECTION");
  };

  //座標からFighterを検索する
  const findFighertByCoordinate = (row, col) => {
    for (const chara of allCharactersStatus.teamA) {
      if (chara.row == row && chara.col == col) {
        return chara;
      }
    }
    for (const chara of allCharactersStatus.teamB) {
      if (chara.row == row && chara.col == col) {
        return chara;
      }
    }
    // 一致するキャラクターが見つからない場合
    return null;
  };

  //ダメージを発生させてHPを減少させる
  const couseDamage = (allCharactersStatus, attackFighter, defenseFighter) => {
    const damage = attackFighter.move.dmg;
    const remainedHP = defenseFighter.hp - damage;
    const updatedTeamA = allCharactersStatus.teamA.map((chara) => {
      if (chara.name === defenseFighter.name) {
        return { ...chara, hp: remainedHP };
      }
      return chara;
    });
    const updatedTeamB = allCharactersStatus.teamB.map((chara) => {
      if (chara.name === defenseFighter.name) {
        return { ...chara, hp: remainedHP };
      }
      return chara;
    });
    //NOTE:defenseFighterのHPが0以下になれば、攻撃側のポイント加算
    setAllCharactersStatus({ teamA: updatedTeamA, teamB: updatedTeamB });
  };

  //攻撃対象の座標からバトルを実行させる
  const duel = (allCharactersStatus, attackFighter, row, col) => {
    let defenceFighter = findFighertByCoordinate(row, col);
    if (defenceFighter) {
      couseDamage(allCharactersStatus, attackFighter, defenceFighter);
      turnFinish();
      defenceFighter = null;
    } else {
      return;
    }
  };

  //ゲームの終了に関する機能
  const maxTurn = 14;
  let victoryPlayer = null;
  if (victoryPoints.teamA > victoryPoints.teamB) {
    victoryPlayer = "TeamA is win";
  } else if (victoryPoints.teamA < victoryPoints.teamB) {
    victoryPlayer = "TeamB is win";
  } else {
    victoryPlayer = "Draw";
  }
  if (maxTurn <= turnCount) {
    alert(victoryPlayer);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <TeamInfo isTeamA={true} victoryPoints={victoryPoints} />
        </div>
        <div className="col">
          <TurnInfo
            turnCount={turnCount}
            gameStatus={gameStatus}
            maxTurn={maxTurn}
          />
        </div>
        <div className="col">
          <BattleInfo turnCount={turnCount} />
        </div>
        <div className="col-2">
          <TeamInfo isTeamA={false} victoryPoints={victoryPoints} />
        </div>
      </div>
      <div className="row">
        <TeamFighters
          isTeamA={true}
          characters={allCharactersStatus.teamA}
          onClickFighter={onClickFighter}
          turnCount={turnCount}
        />
        <div className="col-8 border border-3 border-dark">
          <HoneyComb
            size={55}
            rows={8}
            cols={8}
            allCharactersStatus={allCharactersStatus}
            selectedChara={currentSelectedChara}
            gameStatus={gameStatus}
            onMove={coordinateChange}
            onDuel={duel}
            onFinish={turnFinish}
          />
        </div>
        <TeamFighters
          isTeamA={false}
          characters={allCharactersStatus.teamB}
          onClickFighter={setCurrentSelectedChara}
          turnCount={turnCount}
        />
      </div>
      <UnderBar
        allCharactersStatus={allCharactersStatus}
        onChange={coordinateChange}
        onMove={handleMove}
        onAttack={handleAttack}
        turnCount={turnCount}
      />
    </div>
  );
}

export default App;
