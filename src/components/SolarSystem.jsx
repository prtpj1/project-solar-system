import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import PlanetCard from './PlanetCard';
// import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const { planets } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {/* {planets.map((elemPlanet) => (
          <PlanetCard key={ elemPlanet.name } planetImg={ elemPlanet.image } />
        ))} */}
      </div>
    );
  }
}

SolarSystem.propTypes = {
  planets: PropTypes.string.isRequired,
};

export default SolarSystem;
