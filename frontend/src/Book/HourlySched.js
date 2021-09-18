import React from "react";
import { Link } from "react-router-dom";
import {
  bookACourt,
  bookedCourt,
  timeCell,
  timeRow,
} from "./hourSchedFunctions.js";
import { deleteItem } from "./crudFunctions.js";
import { useHistory } from "react-router-dom";
import format from "date-fns/format";
import addHours from "date-fns/addHours";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";

function HourlySched({ curDate, courtBookings }) {
  let timeSlots = [];
  let history = useHistory();
  let curTime = setMinutes(setHours(curDate, 7), 0);
  let endTime = setMinutes(setHours(curDate, 22), 0);
  const rows = [];

  if (courtBookings[0] === 0) {
    rows.push(
        <div className="sched__bodyLogin" key="loginText">
          <h2>Please Login</h2>
          <Link to="/Login">Click Here to Login!</Link>
          <br/><br/>
          <Link to="/Register">Click Here to Register!</Link>

        </div>
    )
    //If there are court bookings on the day
  } else {
    //Sets # of rows from curTime & endTime (Club's Hours of Operations)
    while (curTime <= endTime) {
      const courtTime = format(curTime, "p");
      const courtDate = format(curTime, "yyyy-MM-d");

      //Sets # of columns, in this case 5 for time and 4 courts
      for (let i = 0; i < 5; i++) {
        //First column is the time
        if (i === 0) {
          timeCell(timeSlots, courtTime);
        } else {
          const courtNum = i.toString();
          const courtCode = courtNum + "--" + courtTime;
          //If no court bookings on the day, fill every cell with bookACourt
          if (courtBookings.length === 0) {
            bookACourt(timeSlots, courtCode, courtTime, courtDate, i);
          } else {
            //Cycles through each court booking to match to time and court cell
            for (let bx = 0; bx < courtBookings.length; bx++) {
              let book = courtBookings[bx];
              //If courtBooking object is same time as row's time
              if (courtTime === book.court_time) {
                //If courtBooking object has same time and court number as row
                if (courtNum === book.court_number) {
                  bookedCourt(
                      timeSlots,
                      courtCode,
                      i,
                      courtBookings,
                      bx,
                      deleteItem,
                      history
                  );
                  break;
                  //If courtBooking object has same time but not same court number
                } else if (courtNum !== book.court_number) {
                  //If the object has the right time, wrong court number, and is last object in array
                  if (bx === courtBookings.length - 1) {
                    bookACourt(timeSlots, courtCode, courtTime, courtDate, i);
                    break;
                  }
                  continue;
                }
                //If cycles through last object in courtBooking & no courtTime match
              } else if (bx === courtBookings.length - 1) {
                bookACourt(timeSlots, courtCode, courtTime, courtDate, i);
                break;
                //Makes sure to cycle through whole courtBooking array for match
              } else {
                continue;
              }
            }
          }
        }
      }
      timeRow(rows, curTime, timeSlots);

      //Resets time slots
      timeSlots = [];
      curTime = addHours(curTime, 1);
    }
  }


  return <div className="sched__body">{rows}</div>;
}

export default HourlySched;
