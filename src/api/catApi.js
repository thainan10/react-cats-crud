class CatApi {
  constructor() {
    this.apiUrl = process.env.API_URL;
  }

  static getAllCats() {
    return fetch(this.apiUrl)
    .then(response => response.json())
    .catch(error => error);
  }
}

export default CatApi;
