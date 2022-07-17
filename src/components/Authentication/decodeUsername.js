import { isExpired, decodeToken } from 'react-jwt';
export default function decodeUsername() {
  try {
    const token = localStorage.getItem('mytoken');
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);

    if (isMyTokenExpired == false) {
      //console.log(myDecodedToken.username);
      return myDecodedToken.username;
    }
  } catch (error) {
    console.log(error);
  }
}
