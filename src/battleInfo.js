import React from 'react'

const BattleInfo = ({isTeamA}) => {

    const teamColor = isTeamA? 'bg-danger' : 'bg-primary';
    const team = isTeamA? 'Team A' : 'Team B';

    return (
        <div className={`card text-white mb-2 ${teamColor}`}>
            <div className="card-header">Battle Info</div>
            <div className="card-body">
                <p className="card-text">This is {team}'s Turn</p>
            </div>
        </div>
    )
}

export default BattleInfo