import React, { useState, useEffect } from "react";
import HourlySched from "./HourlySched";
import { axiosBookingss } from '../Book/crudFunctions';


function TimeSched({ curDate }) {
  const [courtBookings, setCourtBookings] = useState([0]);

  const onCourtBookingUpdate = (value) => {
      setCourtBookings(value);
    }

  //Every time the curDate changes or updates, run fetchBookings
  useEffect(() => {
    axiosBookingss(curDate, onCourtBookingUpdate);
  }, [curDate]);


  return <HourlySched curDate={curDate} courtBookings={courtBookings} />;
}

export default TimeSched;

