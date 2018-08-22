import config from 'util/config';

class HobbyApi {
  static apiUrl = `${config.apiUrl}/hobbies`;

  static getAllHobbies() {
    return fetch(this.apiUrl)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default HobbyApi;
