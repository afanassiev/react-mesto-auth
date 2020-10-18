import React from "react";
import {Link} from "react-router-dom";
import auth from "../utils/auth";

function Login() {
  return (
    <form className="auth">
      <h2 className="auth__header">Вход</h2>
      <label className="auth__label">
        <input
          className="auth__input auth__input_email"
          type="email"
          id="email-input"
          placeholder="Email"
          // defaultValue={name}
          // onChange={handleEmail}
          name="authEmailInput"
          required
          minLength="2"
          maxLength="40"
        />
        <span
          className="auth__error"
          id="email-input-error"
        />
      </label>
      <label className="auth__label">
        <input
          className="auth__input auth__input_password"
          type="password"
          id="password-input"
          placeholder="Пароль"
          // defaultValue={description}
          // onChange={handleDescription}
          name="authPasswordInput"
          required minLength="2"
          maxLength="20"
        />
        <span
          className="auth__error"
          id="password-input-error"
        />
      </label>
      <button
        className="auth__submit"
        type="submit"
      >Войти</button>
      <Link
        to="/sign-up"
        className="auth__link"
      >Ещё не зарегистрированы? Регистрация</Link>
    </form>
  )
}

export default Login;
