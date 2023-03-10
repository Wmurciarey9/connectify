import "./event.scss";
import React from "react";

import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";

export const Event = (props) => {
  return (
    <div className="box">
      <div className="contentBox">
        <div className="left">
          <img src={props.img} alt="" />
        </div>
        <div className="right">
          <div className="eventDate">
            {/* Here goes the date and time of the event gather from the data */}
            <p>{props.date}</p>
          </div>
          <div className="title">
            <p>{props.title}</p>
          </div>
          <div className="location">
            <p>{props.location}</p>
          </div>
          <div className="capacity">
            <p>
              {props.peopleConfirmed} attendees -{" "}
              <span>{props.spotsLeft} spots left</span>
            </p>
          </div>
        </div>
        {/* Share and Favorite floating bottom right. */}
        <div className="icons">
          <IosShareOutlinedIcon className="icon" />
          <StarBorderPurple500OutlinedIcon className="icon" />
        </div>
      </div>
      <hr class="solidLight"></hr>
    </div>
  );
};
