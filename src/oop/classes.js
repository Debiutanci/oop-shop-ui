// import axios from 'axios';

class AbstractOopModel {
  constructor(identifier) {
    this._identifier = identifier;
  }

  inside_log() {
    console.log();
  }
}

export class User {
  constructor(email, password) {
    this._email = email;
    this._password = password;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }
}

export class SentryConnector {
  constructor(endpoint, client) {
    this._endpoint = endpoint;
    this._client = client;
  }

  api_error(error) {
    console.log('Sentry has been notified ...');
    const payload = {
      error,
    };
    // axios.post(this.endpoint, payload);
  }
}

export class SentryClient {
  constructor(service_key) {
    this._secret = service_key;
  }

  get secret() {
    return this._secret;
  }
}

export class Color {
  constructor(name, hex) {
    this._name = name;
    this._hex = hex;
  }
}

export class Product extends AbstractOopModel {
  constructor(identifier, name, description, price, color, category, manufacturer, collection) {
    super(identifier);
    this._name = name;
    this._description = description;
    this._price = price;
    this._color = color;
    this._category = category;
    this._manufacturer = manufacturer;
    this._collection = collection;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  get category() {
    return this._category;
  }

  set category(value) {
    this._category = value;
  }

  get manufacturer() {
    return this._manufacturer;
  }

  set manufacturer(value) {
    this._manufacturer = value;
  }

  get collection() {
    return this._collection;
  }

  set collection(value) {
    this._collection = value;
  }

  get_color = () => {
    if (this.color !== undefined) {
      return this.color.hex;
    }
    return 'transparent';
  };
}
