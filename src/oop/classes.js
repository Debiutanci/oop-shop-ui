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
