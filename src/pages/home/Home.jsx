import React from "react";
import "./Home.scss";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Link } from "react-router-dom";

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
      <Link to="/findEvents">
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
      </Link>
      <div className="top-section-filters">
        <a href="#" className="filters">
          Boost your career
        </a>
        <a href="#" className="filters">
          Find your Zen
        </a>
        <a href="#" className="filters">
          Get Moving
        </a>
        <a href="#" className="filters">
          Share language + culture
        </a>
        <a href="#" className="filters">
          Read with friends
        </a>
        <a href="#" className="filters">
          Write together
        </a>
        <a href="#" className="filters">
          Hone your craft
        </a>
      </div>
      <div className="howItWorks">
        <div className="hiwTop">
          <h1>How Connectify Works</h1>
          <p>
            Meet new people who share your interests through online and
            in-person events. It’s free to create an account.
          </p>
        </div>
        <div className="hiwBottom">
          <div className="hiwSection">
            <img
              src="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=384"
              alt=""
            />
            <h2>Join a group</h2>
            <p>
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </p>
          </div>
          <div className="hiwSection">
            <img
              src="https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=384"
              alt=""
            />
            <h2>Find an event</h2>
            <p>
              Events are happening on just about any topic you can think of,
              from online gaming and photography to yoga and hiking.
            </p>
          </div>
          <div className="hiwSection">
            <img
              src="https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=384"
              alt=""
            />
            <h2>Start a group</h2>
            <p>
              You don’t have to be an expert to gather people together and
              explore shared interests.
            </p>
          </div>
        </div>
        <button>Join Meetup</button>
      </div>
      <div className="download-section">
        <div className="ds-side">
          <img
            src="https://secure.meetupstatic.com/next/images/apps/ScreenIos.webp?w=640"
            alt=""
          />
        </div>
        <div className="ds-middle">
          <div className="icon">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meetup-icon.png"
              alt=""
            />
          </div>
          <p>Stay connected. Download the app.</p>
          <div className="dw-icons">
            <img
              src="https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=2048"
              alt=""
            />
            <img
              src="https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=2048"
              alt=""
            />
          </div>
        </div>
        <div className="ds-side">
          <img
            src="https://secure.meetupstatic.com/next/images/apps/ScreenAndroid.webp?w=640"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
