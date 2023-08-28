import React from "react";

const TurnInfo = () => {
  //TODO: 正しいターン数を表示
  return (
    <div className="card text-white bg-success mb-2">
      <div className="card-header">Turn Info</div>
      <div className="card-body">
        <p className="card-text">Current Turn / Max Turn</p>
      </div>
    </div>
  );
};

export default TurnInfo;
