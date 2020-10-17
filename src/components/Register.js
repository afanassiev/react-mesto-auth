import React from "react";
import {Link} from "react-router-dom";

function Register() {
  return (
    <form className="auth">
      <h2 className="auth__header">Регистрация</h2>
      <label className="auth__label">
        <input
          className="auth__input auth__input_email"
          type="email"
          id="email-input"
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
      >Зарегистрироваться</button>
      <Link
        to="/sign-in"
        className="auth_link"
      >Уже зарегистрированы? Войти</Link>
    </form>
  )
}

export default Register;
