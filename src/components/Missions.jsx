import React from 'react';
import Title from './Title';
import MissionsCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div>
          {missions.map((elemMission) => (
            <MissionsCard
              key={ elemMission.name }
              name={ elemMission.name }
              year={ elemMission.year }
              country={ elemMission.country }
              destination={ elemMission.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
