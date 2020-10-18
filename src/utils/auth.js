import {apiAuthConfig} from "./constants";

class Auth {
  constructor(authConfig) {
    this.url = authConfig.baseUrl
    this.headers = authConfig.headers
  }

  register(email, password) {
    return fetch(`${this.url}/signup`,
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({password, email})
      })
      // .then(this._resultHandler)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        if (res.status === 400) {
          console.log('Некорректно заполнено одно из полей');
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  authorize(email, password) {
    return fetch(`${this.url}/signin`,
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({password, email})
      })
      // .then(this._resultHandler)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        if (res.status === 400) {
          console.log('Не передано одно из полей');
        }
        if (res.status === 401) {
          console.log('Пользователь с таким email не найден');
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  getContent(token) {
    return fetch(`${this.url}/users/me`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
      // .then(this._resultHandler)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        if (res.status === 400) {
          console.log('Токен не передан или передан не в том формате');
        }
        if (res.status === 401) {
          console.log('Переданный токен некорректен')
        }
        return Promise.reject(`Ошибка: ${res.status}`)
  })}
}

const auth = new Auth(apiAuthConfig);

export default auth;
