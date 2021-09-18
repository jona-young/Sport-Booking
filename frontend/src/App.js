import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./General/Header.js";
import Home from "./General/Home.js";
import Blog from "./General/Blog.js";
import About from "./General/About.js";
import Schedule from "./Book/Schedule.js";
import BookForm from "./Book/BookForm.js";
import Register from "./Users/Register.js";
import Login from "./Users/Login.js";
import Profile from "./Users/Profile.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/blog">
            <Header />
            <Blog />
          </Route>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/tennis-book">
            <Header />
            <Schedule />
          </Route>
          <Route path="/tennis-form">
            <Header />
            <BookForm />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/register">
            <Header />
            <Register />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
