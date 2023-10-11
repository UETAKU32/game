import React from "react";

const { useState } = React;

const UnderBar = ({ onMove, onAttack, turnCount ,information}) => {

  const teamColor = turnCount % 2 == 1 ? 'bg-danger' : 'bg-primary';
  const currentPlayer = turnCount % 2 == 1 ? 'TeamA' : 'TeamB';

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
            アクションを選択
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li className="dropdown-item" onClick={onAttack}>
              攻撃
            </li>
            <li className="dropdown-item" onClick={onMove}>
              移動
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="card text-white bg-success mb-2">
          <div className="card-body">
            <p className="card-text">{information} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderBar;
