import React from "react";
import { Events } from "../../components/events/Events";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./findEvents.scss";

export const FindEvents = () => {
  return (
    <div className="findEvents">
      <div className="inside-nav">
        <h1>Events Near</h1>
        <div className="type">
          <h2 className="blue">Events</h2>
          <h2>Groups</h2>
        </div>
        <div className="dropdown">
          <div className="filters">
            <a href="#">
              Any day
              <ArrowDropDownIcon />
            </a>
            <div className="menu">
              <a href="#">Starting Soon</a>
              <a href="#">Today</a>
              <a href="#">Tomorrow</a>
              <a href="#">This week</a>
              <a href="#">This weekend</a>
              <a href="#">Next Week</a>
              <a href="#">Custom</a>
            </div>
          </div>
          <div className="filters">
            <a href="#">
              Any type
              <ArrowDropDownIcon />
            </a>
            <div className="menu">
              <a href="#">Starting Soon</a>
              <a href="#">Online</a>
              <a href="#">In person</a>
              <a href="#">Indoor only</a>
              <a href="#">Outdoor only</a>
            </div>
          </div>
          <div className="filters">
            <a href="#">
              Any distance
              <ArrowDropDownIcon />
            </a>
            <div className="menu">
              <a href="#">Any distance</a>
              <a href="#">1 km</a>
              <a href="#">3 km</a>
              <a href="#">5 km</a>
              <a href="#">10 km</a>
              <a href="#">50 km</a>
              <a href="#">100 km</a>
            </div>
          </div>
          <div className="filters">
            <a href="#">
              Any category
              <ArrowDropDownIcon />
            </a>
            <div className="menu">
              <a href="#">Starting Soon</a>
              <a href="#">Today</a>
              <a href="#">Tomorrow</a>
              <a href="#">This week</a>
              <a href="#">This weekend</a>
              <a href="#">Next Week</a>
              <a href="#">Custom</a>
            </div>
          </div>
          <div className=" main-filter">
            <a href="#">
              Sort by: Relevance
              <ArrowDropDownIcon />
            </a>
            <div className="menu"></div>
          </div>
        </div>
      </div>
      <Events />
    </div>
  );
};
