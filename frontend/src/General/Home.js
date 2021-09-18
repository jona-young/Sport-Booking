import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
        <div className="home__mainBox">
          <Link className="home__mainLink" to="/blog">
            <h1 className="home__heading">The Lightweight Solution for Tennis Sport Booking</h1>
            <span className="home__mainDate">By Jona Young on 14/08/2020</span>
            <p className="home__mainText">
              Frame offers a simple easy-to-use system for Sport Booking. Sign-Up
              for an account, login, and get to booking your tennis court in a
              short couple minutes!
            </p>
            <span className="home__mainSpan">Click to see all blog posts.</span>
          </Link>
        </div>
      <div className="home__rightBox">
        <Link className="home__link" to="/tennis-book">
          <h2>
            Book
            <br />
            A
            <br />
            Court
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;
