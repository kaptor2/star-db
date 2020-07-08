import { SwapiService } from "./SwapiService.js";

export class SwapiPeople extends SwapiService {
  constructor() {
    super();
  }

  async getAllPeoples() {
    const res = await this.getResource(`people/`);
    return res;
  }

  async getPeople(id) {
    const res = await this.getResource(`people/${id}`);
    return res;
  }
}
