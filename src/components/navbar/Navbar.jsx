import "./navbar.scss";
import React from "react";
import TransparentLogoV2 from "../../images/transparentLogoV2.png";
import { Search } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img className="logoImg" src={TransparentLogoV2} alt="" />
          <div className="searchContainer">
            <input type="text" placeholder="Search events" />
            <input type="text" placeholder="Search Location" />
            <Search className="searchIcon" />
          </div>
        </div>
        <div className="right">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>

          <div className="profile navMain">
            <div className="settings">
              <img
                className="navMain"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt=""
              />
              <button>
                <ArrowDropDownIcon className="icon navMain" />
              </button>
            </div>
            <div className="options navMain">
              <span>
                <EditOutlinedIcon className="iconSpan" />
                Your Events
              </span>
              <span>
                <EditOutlinedIcon className="iconSpan" />
                Your Groups
              </span>
              <span>
                <EditOutlinedIcon className="iconSpan" />
                Manage Profile
              </span>
              <span>
                <Person2OutlinedIcon className="iconSpan" />
                Account
              </span>
              <span>
                <HelpOutlineOutlinedIcon className="iconSpan" />
                Help Center
              </span>
              <span>
                <ExitToAppOutlinedIcon className="iconSpan" />
                Log Out
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
