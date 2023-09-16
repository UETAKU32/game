import React from "react";

const MakeHEX = ({
  size,
  x,
  y,
  row,
  col,
  allCharactersStatus,
  existChara,
  selectedChara,
  canMove,
  onMove,
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
    if (canMove) {
      onMove(allCharactersStatus, selectedChara, row, col);
    }
  };

  const getPolygonColor = () => {
    if (existChara) return "red";
    if (canMove) return "yellow";
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
