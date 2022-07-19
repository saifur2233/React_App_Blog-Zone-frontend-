import Cookies from 'js-cookie';
const signout = () => {
  //localStorage.removeItem('mytoken');
  Cookies.remove('macaron');
  window.location.href = '/';
  return;
};

export default signout;
