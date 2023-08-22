import React from 'react'

const TeamInfo = ({isTeamA}) => {

    const team = isTeamA? 'Team A' : 'Team B';
    const teamColor = isTeamA? 'bg-danger' : 'bg-primary';

    return (
        <div className={`card text-white mb-1 ${teamColor}`}>
            <div className="card-header">{team}</div>
            <div className="card-body">
                <p className="card-text">Points:</p>
            </div>
        </div>
    )
}

export default TeamInfo