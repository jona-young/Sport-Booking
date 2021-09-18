import React from "react";
import { Link } from "react-router-dom";

export const bookACourt = (timeSlots, courtCode, courtTime, courtDate, i) => {
  timeSlots.push(
    <div className="sched__col cell" key={courtCode}>
      <Link
        className="sched__link"
        to={{
          pathname: "/tennis-form",
          state: {
            edit_val: false,
            court_date: courtDate,
            court_time: courtTime,
            court_number: i,
          },
        }}
      >
        Book a Court!
      </Link>
    </div>
  );
};

export const bookedCourt = (
  timeSlots,
  courtCode,
  i,
  courtBookings,
  bx,
  deleteItem,
  history
) => {
  const formDel = false;
  timeSlots.push(
    <div className="sched__col cell" key={courtCode} name={i}>
      {courtBookings[bx].player1}
      <br />
      {courtBookings[bx].player2}
      <br />
      {courtBookings[bx].player3}
      <br />
      {courtBookings[bx].player4}
      <Link
        className="sched__linkBook"
        to={{
          pathname: "/tennis-form",
          state: {
            edit_val: true,
            id: courtBookings[bx].id,
            court_date: courtBookings[bx].court_date,
            court_time: courtBookings[bx].court_time,
            court_number: courtBookings[bx].court_number,
            court_play: courtBookings[bx].court_play,
            comments: courtBookings[bx].comments,
            player1: courtBookings[bx].player1,
            player2: courtBookings[bx].player2,
            player3: courtBookings[bx].player3,
            player4: courtBookings[bx].player4,
            author: courtBookings[bx].player1,
          },
        }}
      >
        Edit Booking
      </Link>
      <button
        onClick={() => deleteItem(courtBookings[bx].id, history, formDel)}
      >
        Delete
      </button>
    </div>
  );
};

export const timeCell = (timeSlots, courtTime) => {
  timeSlots.push(
    <div className="sched__col cell coltime" key={`Time-${courtTime}`}>
      {courtTime}
    </div>
  );
};

export const timeRow = (rows, curTime, timeSlots) => {
  rows.push(
    <div className="sched__row" key={curTime}>
      {timeSlots}
    </div>
  );
};
