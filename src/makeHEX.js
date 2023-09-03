import React from 'react'

const MakeHEX = ({ size, x, y ,row ,col}) => {
    //中心点より各頂点への座標を計算
    const points = [
        [0, size],
        [(Math.sqrt(3) / 2) * size, size / 2],
        [(Math.sqrt(3) / 2) * size, -size / 2],
        [0, -size],
        [-(Math.sqrt(3) / 2) * size, -size / 2],
        [-(Math.sqrt(3) / 2) * size, size / 2]
    ];

    //各座標をString化してpolygonに適応した形に変更
    const pointsString = points.map(point => point.join(',')).join(' ');

    const handleClick = () => {
        // クリック時の処理
        const clickedCoordinates = `X座標: ${row}, Y座標: ${col}`;
        window.alert(clickedCoordinates);
    };


    return (
        //HEXを描画する
        <polygon
            points={pointsString}
            fill="lightgreen"
            stroke="black"
            strokeWidth="2"
            transform={`translate(${x}, ${y})`}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        />
        
    )
}

export default MakeHEX