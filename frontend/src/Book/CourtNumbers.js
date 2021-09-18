import React from "react";
import "./Schedule.css";

function CourtNumbers() {
  const days = [];

  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      days.push(
        <div className="sched__col bold col-center" key={i}>
          Hours
        </div>
      );
    } else {
      days.push(
        <div className="sched__col bold col-center" key={i}>
          Court {i}
        </div>
      );
    }
  }
  return <div className="sched_days sched__row">{days}</div>;
}

export default CourtNumbers;
