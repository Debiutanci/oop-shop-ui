import axios from 'axios';

export function userLogin(userEmail, userPassword, signIn, setUserValidation) {
  const payload = {
    email: userEmail,
    password: userPassword,
  };
  axios
    .post('https://oop-shop-core.herokuapp.com/auth/users/login/', payload)
    .then((response) => signIn(response.data))
    .catch((error) => {
      setUserValidation(false);
      console.error('There was an error!', error);
    });
}
