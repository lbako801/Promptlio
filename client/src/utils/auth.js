import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("user-token");
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem("user-token");
  }

  login(idToken) {
    localStorage.setItem("user-token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("user-token");
    window.location.assign('/login');
  }
}

export default new AuthService();
