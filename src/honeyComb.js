import React from "react";
import MakeHEX from "./makeHEX";
import FightersDisplay from "./FightersDisplay";

const HoneyComb = ({
  size,
  rows,
  cols,
  teamACharacters,
  teamBCharacters,
  selectedChara,
  gameStatus,
}) => {
  const honeycomb = [];

  //HEXの高さと幅を計算
  const hexWidth = Math.sqrt(3) * size;
  const hexHeight = size * 2;

  const confirmAdjacent = (row, col) => {
    const adjacentHEX = [];
    adjacentHEX.push([row - 1, col], [row, col - 1], [row + 1, col], [row, col + 1]);
    if (col % 2 == 1) {
      adjacentHEX.push([row + 1, col + 1], [row + 1, col - 1]);
    } else {
      adjacentHEX.push([row - 1, col - 1], [row - 1, col + 1]);
    }
    return adjacentHEX
  }


  let adjacent = []
  if (selectedChara) {
    adjacent = confirmAdjacent(selectedChara.row, selectedChara.col);
  }

  //row col の蜂の巣型盤面を作成
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      //各HEXの中心座標を計算
      const x =
        row * hexWidth + (col % 2 === 1 ? hexWidth / 2 : 0) + hexWidth / 2 + 2;
      const y = col * 1.5 * size + size + 2;

      const existChara =
        selectedChara && selectedChara.row == row && selectedChara.col == col;

      const canMove =
        selectedChara &&
        gameStatus == "MOVE_SELECTION" &&
        adjacent.some(hex => hex[0] == row && hex[1] == col)


      honeycomb.push(
        <>
          <MakeHEX
            key={`${row}-${col}`}
            size={size}
            x={x}
            y={y}
            row={row}
            col={col}
            existChara={existChara}
            canMove={canMove}
          />
        </>
      );
    }
  }

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${cols * hexWidth} ${(rows + 0.5) * { hexHeight }}`}
      style={{ display: "block", margin: "auto" }}
    >
      {honeycomb}
      <FightersDisplay
        characters={teamACharacters}
        hexWidth={hexWidth}
        hexHeight={hexHeight}
      />
      <FightersDisplay
        characters={teamBCharacters}
        hexWidth={hexWidth}
        hexHeight={hexHeight}
      />
    </svg>
  );
};

export default HoneyComb;
