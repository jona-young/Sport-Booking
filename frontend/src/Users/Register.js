import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { handleChange, handleRegisterSubmit } from "./authenticationFunctions.js";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [errors, setErrors] = useState();
  let history = useHistory();

  const onUsernameUpdate = (value) => {
    setUsername(value);
  };

  const onPasswordUpdate = (value) => {
    setPassword(value);
  };

  const onEmailUpdate = (value) => {
    setEmail(value);
  };

  const onFnameUpdate = (value) => {
    setFname(value);
  }

  const onLnameUpdate = (value) => {
    setLname(value);
  }

  const onErrorUpdate = (value) => {
    setErrors(value);
  }

  return (
    <div className="register">
      <p>{ errors ? errors : null }</p>
      <form className="register__form" onSubmit={(e) => handleRegisterSubmit(e, username, password, email, fname, lname, history, onErrorUpdate)}>
        <h1>Register</h1>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) =>
              handleChange(e, onUsernameUpdate, onPasswordUpdate, onEmailUpdate, onFnameUpdate, onLnameUpdate)
            }
          />
        </label>
        <label>
          Email:
          <br />
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) =>
                handleChange(e, onUsernameUpdate, onPasswordUpdate, onEmailUpdate, onFnameUpdate, onLnameUpdate)
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
                handleChange(e, onUsernameUpdate, onPasswordUpdate, onEmailUpdate, onFnameUpdate, onLnameUpdate)
            }
          />
        </label>
        <label>
          First Name:
          <input
              name="fname"
              type="text"
              value={fname}
              onChange={(e) =>
                  handleChange(e, onUsernameUpdate, onPasswordUpdate, onEmailUpdate, onFnameUpdate, onLnameUpdate)
              }
          />
        </label>
        <label>
          Last Name:
          <input
              name="lname"
              type="text"
              value={lname}
              onChange={(e) =>
                  handleChange(e, onUsernameUpdate, onPasswordUpdate, onEmailUpdate, onFnameUpdate, onLnameUpdate)
               }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Register;
