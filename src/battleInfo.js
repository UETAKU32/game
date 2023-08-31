import React from 'react'

const BattleInfo = ({turnCount}) => {

    const teamColor = turnCount%2 == 1 ? 'bg-danger' : 'bg-primary';
    const currentPlayer = turnCount%2 == 1 ? 'TeamA' : 'TeamB';

    return (
        <div className={`card text-white mb-2 ${teamColor}`}>
            <div className="card-header">Battle Info</div>
            <div className="card-body">
                <p className="card-text">This is {currentPlayer}'s Turn</p>
            </div>
        </div>
    )
}

export default BattleInfo