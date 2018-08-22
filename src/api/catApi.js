import config from 'util/config';

class CatApi {
  static apiUrl = `${config.apiUrl}/cats`;

  static getAllCats() {
    return fetch(this.apiUrl)
    .then(response => response.json())
    .catch(error => error);
  }
}

export default CatApi;
