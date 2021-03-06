import { SwapiService } from "./SwapiService.js";

export class SwapiPeople extends SwapiService {
  constructor() {
    super();
  }

  getAllPeoples = async () => {
    const people = await this.getResource(`people/`);
    return people.results.map(this._transforPeople);
  }

   getPeople = async (id) => {
    const people = await this.getResource(`people/${id}`);
    return this._transforPeople(people);
  }

  _transforPeople = (people) => {
    return {
      id: this._extractID(people),
      name: people.name,
      birth_year: people.birth_year,
      gender: people.gender,
      height: people.height,
      url: `https://starwars-visualguide.com/assets/img/characters/${ this._extractID(people) }.jpg`
    };
  }
}
