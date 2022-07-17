import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/';
const register = (fullname, user, email, pwd) => {
  console.log('hello 1');
  return axios
    .post(API_URL + 'signup', {
      fullname,
      user,
      email,
      pwd,
    })
    .then((response) => {
      console.log('hello 2');
      console.log(response.data);
      const accessToken = response.data.accessToken;
      localStorage.setItem('mytoken', accessToken);
      return response.data;
    });
};
const login = (username, password) => {
  return axios
    .post(API_URL + 'signin', {
      username,
      password,
    })
    .then((response) => {
      console.log(response.data);
      const accessToken = response.data.accessToken;
      localStorage.setItem('mytoken', accessToken);
      return response.data;
    });
};

const AuthService = {
  register,
  login,
};
export default AuthService;
