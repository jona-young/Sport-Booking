import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleChange, handleLoginSubmit } from "./authenticationFunctions.js";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();

  let history = useHistory();

  const onUsernameUpdate = (value) => {
    setUsername(value);
  };

  const onPasswordUpdate = (value) => {
    setPassword(value);
  };

  const onErrorUpdate = (value) => {
    setErrors(value);
  }

  return (
    <div className="login">
      <p>{ errors ? errors : null }</p>

      <form className="login__form" onSubmit={(e) => handleLoginSubmit(e, username, password, history, onErrorUpdate)}>
        <h1>Login</h1>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) =>
              handleChange(e, onUsernameUpdate, onPasswordUpdate)
            }
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) =>
              handleChange(e, onUsernameUpdate, onPasswordUpdate)
            }
          />
        </label>
        <input className="login__formSubmit" type="submit" value="Submit" />
      </form>
      <p><Link className="sched__linkBook" to="/register">Click Here to Register.</Link></p>
    </div>
  );
}

export default Login;
