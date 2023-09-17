import config from '../config/config';

class LogoutService {
  logout() {
    return fetch(config.APP_URL);
  }
}

export default new LogoutService();