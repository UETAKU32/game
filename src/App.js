import './App.css';
import TeamFighters from './teamFighters';
import TeamInfo from './teamInfo';
import TurnInfo from './turnInfo';
import BattleInfo from './battleInfo';
import UnderBar from './underBar';
import HoneyComb from './honeyComb';

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <TeamInfo isTeamA={true} />
        </div>
        <div className="col">
          <TurnInfo />
        </div>
        <div className="col">
          <BattleInfo isTeamA={false} />
        </div>
        <div className="col-2">
          <TeamInfo isTeamA={false} />
        </div>
      </div>
      <div className="row">
        <TeamFighters isTeamA={true} />
        <div className="col-8 border border-3 border-dark">
          <HoneyComb size={55} rows={8} cols={8} />
        </div>
        <TeamFighters isTeamA={false} />
      </div>
      <UnderBar />
    </div>
  );
}

export default App;
