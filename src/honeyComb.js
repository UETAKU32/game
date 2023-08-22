import React from 'react'
import MakeHEX from './makeHEX'

const HoneyComb = ({ size, rows, cols }) => {

  const honeycomb = [];

  //HEXの高さと幅を計算
  const hexWidth = Math.sqrt(3) * size;
  const hexHeight = size * 2;

//row col の蜂の巣型盤面を作成
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {

      //各HEXの中心座標を計算
      const x = row * hexWidth + (col % 2 === 1 ? hexWidth / 2 : 0) + hexWidth / 2 + 2;
      const y = col * 1.5 * size + size + 2;

      honeycomb.push(
        <MakeHEX key={`${row}-${col}`} size={size} x={x} y={y} row={row} col={col}/>
      );
    }
  }

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${cols * hexWidth} ${(rows + 0.5) * {hexHeight}}`}
      style={{ display: 'block', margin: 'auto' }}
    >
      {honeycomb}
    </svg>
  )
}

export default HoneyComb