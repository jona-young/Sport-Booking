import React from "react";
import format from "date-fns/format";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import "./Schedule.css";

function MonthHeader({ curDate, onDateUpdate }) {
  const dateFormat = "MMMM yyyy";

  const handleOnClickNMonth = () => {
    onDateUpdate(addMonths(curDate, 1));
  };
  const handleOnClickPMonth = () => {
    onDateUpdate(subMonths(curDate, 1));
  };

  return (
    <div className="schedule__header sched__row flex-middle">
      <div className="sched__colHead col-start">
        <div className="icon" onClick={handleOnClickPMonth}>
          chevron_left
        </div>
      </div>
      <div className="sched__colHead col-center">
        <span className="text">{format(curDate, dateFormat)}</span>
      </div>
      <div className="sched__colHead col-end">
        <div className="icon" onClick={handleOnClickNMonth}>
          chevron_right
        </div>
      </div>
    </div>
  );
}

export default MonthHeader;
