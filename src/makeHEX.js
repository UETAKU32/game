import React from "react";

const MakeHEX = ({
  size,
  x,
  y,
  row,
  col,
  allCharactersStatus,
  existSelectedChara,
  existChara,
  selectedChara,
  canMove,
  onMove,
  canAttack,
  onFinish,
}) => {
  //中心点より各頂点への座標を計算
  const points = [
    [0, size],
    [(Math.sqrt(3) / 2) * size, size / 2],
    [(Math.sqrt(3) / 2) * size, -size / 2],
    [0, -size],
    [-(Math.sqrt(3) / 2) * size, -size / 2],
    [-(Math.sqrt(3) / 2) * size, size / 2],
  ];

  //各座標をString化してpolygonに適応した形に変更
  const pointsString = points.map((point) => point.join(",")).join(" ");

  const handleClick = () => {
    // クリック時の処理 キャラの移動
    if (canMove && !existChara) {
      onMove(allCharactersStatus, selectedChara, row, col);
      onFinish();
    } else if (existChara && canAttack) {
      onFinish();
    }
  };

  const getPolygonColor = () => {
    if (existSelectedChara) return "blue";
    if (canMove) return "yellow";
    if (canAttack) return "red";
    return "lightgreen";
  };

  const polygonColor = getPolygonColor();

  return (
    //HEXを描画する
    <polygon
      points={pointsString}
      fill={polygonColor}
      stroke="black"
      strokeWidth="2"
      transform={`translate(${x}, ${y})`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default MakeHEX;
