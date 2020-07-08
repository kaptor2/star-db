export class SwapiService {
  _apiBase = "https://swapi.dev/api/";

  async getResource(url) {
    const fetchURL = `${this._apiBase}${url}`;
    const res = await fetch(fetchURL);
    if (!res.ok) {
      throw new Error(`Cold not fetch ${fetchURL}
          received ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  _extractID (item) {
    const regMasck = /\/([0-9]*)\/$/;
    return item.url.match(regMasck)[1];
  }
}