import React, { useState } from "react";
import { deleteItem, handleChange, handleSubmit } from "./crudFunctions.js";
import { useHistory, useLocation } from "react-router-dom";
import "./BookForm.css";

function BookForm() {
  let history = useHistory();
  let data = useLocation();
  const formDel = true;

  //Sets the item that will be pushed to DRF API to create court booking
  const [currentItem, setCurrentItem] = useState({
    id: data.state.id ? data.state.id : null,
    court_date: data.state.court_date ? data.state.court_date : "",
    court_time: data.state.court_time ? data.state.court_time : "",
    court_number: data.state.court_number ? data.state.court_number : "1",
    court_play: data.state.court_play ? data.state.court_play : "0",
    comments: data.state.comments ? data.state.comments : "[Placeholder]",
    player1: data.state.player1 ? data.state.player1 : "",
    player2: data.state.player2 ? data.state.player2 : "",
    player3: data.state.player3 ? data.state.player3 : "",
    player4: data.state.player4 ? data.state.player4 : "",
    author: data.state.author ? data.state.author : "",
  });

  const updateItem = (e) => {
    setCurrentItem(e);
  };

  return (
    <div className="form">
      <span className="title">Court Booking Form</span>
      <form
        className="form__form"
        onSubmit={(e) => handleSubmit(e, currentItem, data, history)}
      >
        <label className="form__field">
          Court Date
          <br />
          <input
            type="date"
            onChange={(e) => handleChange(e, updateItem, currentItem)}
            className="form__input"
            name="court_date"
            value={currentItem.court_date}
            placeholder="YYYY-MM-DD"
          />
        </label>
        <label className="form__field">
          Court Time <br />
          <input
            onChange={(e) => handleChange(e, updateItem, currentItem)}
            className="form__input"
            name="court_time"
            value={currentItem.court_time}
          />
        </label>
        <label className="form__field">
          Court Number <br />
          <select
            onChange={(e) => handleChange(e, updateItem, currentItem)}
            className="form__input"
            name="court_number"
            value={currentItem.court_number}
          >
            <option value="1">Court 1</option>
            <option value="2">Court 2</option>
            <option value="3">Court 3</option>
            <option value="4">Court 4</option>
          </select>
        </label>
        <label className="form__field">
          Court Type
          <br />
          <select
            onChange={(e) => handleChange(e, updateItem, currentItem)}
            className="form__input"
            name="court_play"
            value={currentItem.court_play}
          >
            <option value="0">Doubles</option>
            <option value="1">Singles</option>
          </select>
        </label>
        <label className="form__field">
          Player <br />
          <input
            type="text"
            onChange={(e) => handleChange(e, updateItem, currentItem)}
            className="form__input"
            name="player1"
            value={currentItem.player1}
          />
        </label>
        <label className="form__field">
          Player <br />
          <input
            type="text"
            onChange={(e) => handleChange(e, updateItem, currentItem)}
            className="form__input"
            name="player2"
            value={currentItem.player2}
          />
        </label>
        {currentItem.court_play === "1" ? (
          ""
        ) : (
          <label className="form__field">
            Player <br />
            <input
              type="text"
              onChange={(e) => handleChange(e, updateItem, currentItem)}
              className="form__input"
              name="player3"
              value={currentItem.player3}
            />
          </label>
        )}
        {currentItem.court_play === "1" ? (
          ""
        ) : (
          <label className="form__field">
            Player <br />
            <input
              type="text"
              onChange={(e) => handleChange(e, updateItem, currentItem)}
              className="form__input"
              name="player4"
              value={currentItem.player4}
            />
          </label>
        )}

        <label className="form__field">
          Comments <br />
          <textarea
            onChange={(e) => handleChange(e, updateItem, currentItem)}
            className="form__input"
            name="comments"
            value={currentItem.comments}
            rows="7"
            cols="30"
          />
        </label>
        <input id="submit" className="form__submit" type="submit" name="Add" />
      </form>
      <button onClick={() => deleteItem(currentItem.id, history, formDel)}>
        Delete
      </button>
    </div>
  );
}

export default BookForm;
