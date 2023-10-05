import React from "react";

const FightersDisplay = ({ characters, hexWidth, hexHeight }) => {
  const characterDisplay = characters
    .filter((chara) => chara.hp > 0)
    .map((chara) => (
      <image
        x={
          chara.row * hexWidth +
          (chara.col % 2 === 1 ? hexWidth / 2 : 0) +
          hexWidth / 2 +
          2 -
          45
        } // 画像のX座標
        y={(chara.col * 1.5 * hexHeight) / 2 + hexHeight / 2 + 2 - 50} // 画像のY座標
        width="90" // 画像の幅
        height="100" // 画像の高さ
        xlinkHref={chara.image.url} // 画像のURLを指定
        style={{ pointerEvents: "none" }}
      />
    ));
  return <>{characterDisplay}</>;
};

export default FightersDisplay;
