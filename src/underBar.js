import React from "react";

const { useState } = React;

const UnderBar = ({ teamACharacters, onChange, onMove, onAttack, turnCount}) => {
    
  const [selectedCharacter, setSelectedCharacter] = useState("");

  const hpDecrease = () => {
    if (selectedCharacter) {
      handleTeamAChange(selectedCharacter);
      setSelectedCharacter(""); 
    }
  };

  const handleTeamAChange = (characterName) => {
    const updatedTeamA = teamACharacters.map((chara) => {
      if (chara.name === characterName) {
        const updatedHP = Math.max(0, chara.hp - 1);
        return { ...chara, hp: updatedHP };
      }
      return chara;
    });
    onChange(updatedTeamA);
  };

  const teamColor = turnCount%2 == 1 ? 'bg-danger' : 'bg-primary';
  const currentPlayer = turnCount%2 == 1 ? 'TeamA' : 'TeamB';

  return (
    <div className="row">
      <div className="col">
        <div className={`card text-white mb-2 ${teamColor}`}>
          <div className="card-header">{currentPlayer}</div>
        </div>
      </div>
      <div className="col">
        <div className="dropdown">
          <button
            className="btn btn-success dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Action
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li className="dropdown-item" onClick={onAttack}>
              Attack
            </li>
            <li className="dropdown-item" onClick={onMove}>
              Move
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <select
          value={selectedCharacter}
          onChange={(e) => setSelectedCharacter(e.target.value)}
        >
          <option value="">キャラクターを選択してください</option>
          {teamACharacters.map((chara) => (
            <option key={chara.name} value={chara.name}>
              {chara.name}
            </option>
          ))}
        </select>
        <button onClick={hpDecrease} disabled={!selectedCharacter}>
          体力を減らす
        </button>
      </div>
    </div>
  );
};

export default UnderBar;
