import { axiosInstance } from "../Users/axiosApi.js";
import format from "date-fns/format";

//Pulls booking list from DRF API on curDate
export const axiosBookingss = (curDate, onCourtBookingUpdate) => {
  const urlDateFormat = "yyyy-MM-d";

  axiosInstance.get(`/tbook-list/${format(curDate, urlDateFormat)}/`)
      .then((response) => {
        onCourtBookingUpdate(response.data)
      }).catch ((error) => {
    console.log(error.response)
    throw error;
  })
};

//Delete a court booking
export const deleteItem = (courtBookingID, history, formDel) => {
  axiosInstance
    .delete(`/tbook-delete/${courtBookingID}/`)
    .catch((error) => {
      console.log("delItemErr: ", error);
    });

  if (formDel === true) {
    history.push("/tennis-book");
  } else if (formDel === false) {
    window.location.reload(false);
  }
};

//Function to update currentItem based off changes in each individual form field
export const handleChange = (e, updateItem, currentItem) => {
  const name = e.target.name;
  const value = e.target.value;

  if (name === "player1") {
    updateItem({ ...currentItem, [name]: value, author: value });
  } else if (name === "court_play") {
    if (value === "1") {
      updateItem({ ...currentItem, player3: "", player4: "", [name]: value });
    } else {
      updateItem({ ...currentItem, [name]: value });
    }
  } else {
    updateItem({ ...currentItem, [name]: value });
  }
};

//Submits the form to DRF API, sets currentItem back to blank, and redirects to court booking page
export const handleSubmit = (e, currentItem, data, history) => {
  e.preventDefault();
  var newUrl = "/tbook-create/";

  if (data.state.edit_val === true) {
    newUrl = `/tbook-update/${currentItem.id}/`;
  }

  axiosInstance.post(newUrl, currentItem).catch((error) => {
    console.log("delItemErr: ", error);
  });
  history.push("/tennis-book");
};
