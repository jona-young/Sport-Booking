import React from "react";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import "./Schedule.css";

function DayHeader({ curDate, onDateUpdate }) {
  const dateFormat = "E, MMM d, yyyy";

  const handleOnClickPDay = () => {
    onDateUpdate(subDays(curDate, 1));
  };

  const handleOnClickNDay = () => {
    onDateUpdate(addDays(curDate, 1));
  };

  return (
    <div className="schedule__header sched__row flex-middle">
      <div className="sched__colHead col-start">
        <div className="icon" onClick={handleOnClickPDay}>
          chevron_left
        </div>
      </div>
      <div className="sched__colHead col-center">
        <span className="text">{format(curDate, dateFormat)}</span>
      </div>
      <div className="sched__colHead col-end">
        <div className="icon" onClick={handleOnClickNDay}>
          chevron_right
        </div>
      </div>
    </div>
  );
}

export default DayHeader;
