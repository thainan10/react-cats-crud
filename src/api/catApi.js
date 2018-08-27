import config from 'util/config';

class CatApi {
  static apiUrl = `${config.apiUrl}/cats`;

  static getAllCats() {
    return fetch(this.apiUrl)
    .then(response => response.json())
    .catch(error => error);
  }

  static updateCat(cat) {
    return fetch(this.apiUrl, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({cat})
    });
  }
}

export default CatApi;
