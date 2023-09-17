import config from '../config/config';

class LoginService {
    login() {
        return fetch(config.APP_URL);
    }
}

export default new LoginService();