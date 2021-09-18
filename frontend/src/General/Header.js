import React from "react";
import { Link, useHistory } from "react-router-dom";

import { axiosInstance } from "../Users/axiosApi.js";
import "./Header.css";

function Header() {
  let history = useHistory();
  const handleLogout = () => {
    try {
      axiosInstance
        .post("/blacklist/", {
          refresh_token: localStorage.getItem("refresh_token"),
        })
        .then((response) => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          localStorage.removeItem('user_id')
          axiosInstance.defaults.headers["Authorization"] = null;
          return response;
        });
    } catch (e) {
      console.log(e);
    }
    history.push("/");
  };

  return (
    <nav className="header">
      <div className="header__optionMain">
        <Link className="header__linkBig" to="/">
          Frame
        </Link>
      </div>
      <div className="header__optionSub">
        <Link className="header__link" to="/blog">
          Blog
        </Link>
      </div>
      <div className="header__optionSub">
        <Link className="header__link" to="/about">
          About
        </Link>
      </div>
      <div className="header__optionSub">|</div>
      <div className="header__optionSub">
        <Link className="header__link" to="/tennis-book">
          Book
        </Link>
      </div>
      <div className="header__optionSub">
        <Link className="header__link" to="/profile">
          Profile
        </Link>
      </div>
      <div className="header__optionEnd">
        <Link className="header__linkEnd" to="/login">
          Login
        </Link>
        <Link className="header__linkEnd" to="/register">
          Register
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Header;
