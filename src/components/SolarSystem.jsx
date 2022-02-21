import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planetsContainer">
          {planets.map((elemPlanet) => (
            <PlanetCard
              key={ elemPlanet.name }
              planetName={ elemPlanet.name }
              planetImage={ elemPlanet.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
