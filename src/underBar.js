import React from 'react'

const UnderBar = ({ teamACharacters, onChange }) => {

    const handleTeamA = (event) => {
        const selectedCharacter = event.target.value;
        handleTeamAChange(selectedCharacter);
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



    return (
        <div className="row">
            <div className="col">
                <div className={`card text-white mb-2 bg-danger`}>
                    <div className="card-header">Team A</div>
                </div>
            </div>
            <div className="col">
                <div className="dropdown">
                    <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Action
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li className="dropdown-item">Attack</li>
                        <li className="dropdown-item">Move</li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <select onChange={handleTeamA}>
                    <option value="">キャラクターを選択してください</option>
                    {teamACharacters.map((chara) => (
                        <option key={chara.name} value={chara.name}>
                            {chara.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col">
                <button onClick={handleTeamA} type="button" className="btn btn-primary">
                    Do Order
                </button>
            </div>
        </div>
    )
}

export default UnderBar