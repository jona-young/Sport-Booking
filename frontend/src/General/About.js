import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <span className="about__title">About</span>
      <p className="about__content">
        The goal of Frame is to create a lightweight solution for smaller sport
        organizations looking for a court booking solution to keep track of
        court usage. The current solution is to setup a spreadsheet software
        with times and courts to record the court bookings. While not a bad
        solution, Frame allows you to keep a record of all your bookings as a
        dedicated service.
        <br />
        <br />
        We offer a free-service for your court booking needs! If you are looking
        for a court booking service that requires a different number of courts,
        times, or other rules, send us an email at{" "}
        <a href="#">example@frame.com</a> and we can look to customize the
        service for your needs!
      </p>
    </div>
  );
}

export default About;
