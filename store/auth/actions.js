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

export function getStoreProducts(setProducts) {
  axios
    .get('https://oop-shop-core.herokuapp.com/api/products/')
    .then((response) => setProducts(response.data))
    .catch((error) => {
      console.error('There was an error!', error);
    });
}
