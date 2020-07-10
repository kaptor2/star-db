import { SwapiService } from "./SwapiService.js";

export class SwapiPlanet extends SwapiService {
  constructor() {
    super();
  }

  async getAllPlanets() {
    const planets = await this.getResource(`planets/`);
    return planets.results.map(this._transforPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}`);
    return this._transforPlanet(planet);
  }

  _transforPlanet = (planet) => {
    return {
      id: this._extractID(planet),
      name: planet.name,
      diameter: planet.diameter,
      population: planet.population,
      orbital_period: planet.orbital_period,
      gravity: planet.gravity,
    };
  }
}