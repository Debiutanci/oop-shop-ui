import axios from 'axios';
import { SentryConnector } from '../../src/oop/classes'
import { SentryClient } from '../../src/oop/classes'

const sentry_client = new SentryClient("@!$#%GF134fdf1q341dsf143~!#")
const sc = new SentryConnector(
  endpoint='https://some-sentry-endpoint/12312541/',
  client=sentry_client
)

export function userLogin(user, signIn, setUserValidation) {
  const payload = {
    email: user.email,
    password: user.password,
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
      sc.api_error(error);
    });
}

export function addToCart(token, quantity = 1, itemKey) {
  const payload = {
    user: '1',
    quantity,
  };
  axios
    .post(`https://oop-shop-core.herokuapp.com/api/products/${itemKey}/add-to-cart/`, payload)
    .then((response) => console.log(response))
    .catch((error) => {
      console.error('There was an error!', error);
      // console.log(itemKey);
    });
}
