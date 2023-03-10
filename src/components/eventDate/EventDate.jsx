import React from "react";

export const EventDate = () => {
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[new Date().getDay()];
  const dayNum = new Date().getDate();
  const month = months[new Date().getMonth()];
  return (
    <div>
      <div className="date">
        <h1>{day + ", " + month + " " + dayNum}</h1>
        <hr class="solid"></hr>
      </div>
    </div>
  );
};
