import React from 'react'
import Fighter from './fighter'

const TeamFighters = ({isTeamA}) => {
  return (
    <div className="col-2">
    <Fighter isTeamA={isTeamA} />
    <Fighter isTeamA={isTeamA} />
    <Fighter isTeamA={isTeamA} />
  </div>
  )
}

export default TeamFighters