import React from "react";
import "./Home.scss";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

export const Home = () => {
  return (
    <div className="home">
      <div className="top-section">
        <div className="left">
          <h1>The people platform—Where interests become friendships</h1>
          <p>
            Whatever your interest, from hiking and reading to networking and
            skill sharing, there are thousands of people who share it on Meetup.
            Events are happening every day—log in to join the fun.
          </p>
        </div>
        <div className="right">
          <img
            src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080"
            alt=""
          />
        </div>
      </div>
      <div className="top-section-bottom">
        <div className="activity">
          <img
            src="https://secure.meetupstatic.com/next/images/indexPage/category1.webp?w=640"
            alt=""
          />
          <div className="icon">
            <a href="#">Make new friends</a>
            <ArrowForwardOutlinedIcon />
          </div>
        </div>
        <div className="activity">
          <img
            src="https://secure.meetupstatic.com/next/images/indexPage/category2.webp?w=640"
            alt=""
          />
          <div className="icon">
            <a href="#">Explore the outdoors</a>
            <ArrowForwardOutlinedIcon />
          </div>
        </div>
        <div className="activity">
          <img
            src="https://secure.meetupstatic.com/next/images/indexPage/category3.webp?w=640"
            alt=""
          />
          <div className="icon">
            <a href="#">Connect over friends</a>
            <ArrowForwardOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="top-section-filters">
        <a href="#" className="filters">
          Boost your career
        </a>
        <a href="#" className="filters">
          Find your Zen
        </a>
        <a href="#" className="filters">
          Any day
        </a>
        <a href="#" className="filters">
          Any day
        </a>
        <a href="#" className="filters">
          Any day
        </a>
        <a href="#" className="filters">
          Any day
        </a>
        <a href="#" className="filters">
          Any day
        </a>
      </div>
    </div>
  );
};
