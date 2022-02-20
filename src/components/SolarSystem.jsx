import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((elemPlanet) => (
          <PlanetCard
            key={ elemPlanet.name }
            planetName={ elemPlanet.name }
            planetImage={ elemPlanet.image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
