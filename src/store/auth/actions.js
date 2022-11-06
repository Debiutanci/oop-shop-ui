import axios from 'axios';

export function userLogin(userEmail, userPassword) {
  const payload = {
    email: userEmail,
    password: userPassword,
  };
  console.log(JSON.stringify(payload));
  axios
    .post('https://oop-shop-core.herokuapp.com/auth/users/login/', JSON.stringify(payload))
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error('There was an error!', error);
    });
}
