const signout = () => {
  localStorage.removeItem('mytoken');
  window.location.href = '/';
  return;
};

export default signout;
