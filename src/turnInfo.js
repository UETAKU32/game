import React from "react";

const TurnInfo = ({ turnCount, gameStatus }) => {
  //TODO: 正しいターン数を表示
  return (
    <div className="card text-white bg-success mb-2">
      <div className="card-header">Turn Info [ {gameStatus}(debug用表示) ]</div>
      <div className="card-body">
        <p className="card-text">{turnCount} / Max Turn</p>
      </div>
    </div>
  );
};

export default TurnInfo;
