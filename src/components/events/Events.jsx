import React from "react";
import { Event } from "../event/Event";
import { EventDate } from "../eventDate/EventDate";
import "./events.scss";

export const Events = () => {
  return (
    <div>
      <Event
        img="https://shpeboston.org/wp-content/uploads/2019/07/soccer-ball-ss-img.jpg"
        date="SUN, MAR 11 - 6:00 AM GMT -5"
        title="Soccer Pickup"
        location="Bushwick, NY"
        peopleConfirmed="3"
        spotsLeft="12"
      />
      <Event
        img="https://www.imgacademy.com/sites/default/files/soccer-camp-facilities-o-1.jpg"
        date="MON, MAR 1 - 6:00 AM GMT -5"
        title="Soccer Pickup 11 v 11"
        location="Manhattan, NY"
        peopleConfirmed="13"
        spotsLeft="12"
      />
      <Event
        img="https://media.gettyimages.com/id/3443877/photo/yoga-instructor-rod-stryker-leads-a-tantric-hatha-yoga-class-during-step-up-womens-networks.jpg?s=612x612&w=gi&k=20&c=GEushAzgaMvHstQElust3TmhPG3_6EsR3NNetq2X7jw="
        date="SUN, DEC 11 - 8:00 PM GMT -5"
        title="Yoga Class"
        location="Bushwick, NY"
        peopleConfirmed="6"
        spotsLeft="4"
      />

      <Event
        img="https://www.shutterstock.com/image-photo/mature-fitness-woman-tie-shoelaces-260nw-1221793927.jpg"
        date="SUN, DEC 11 - 8:00 PM GMT -5"
        title="Running Day"
        location="Bushwick, NY"
        peopleConfirmed="3"
        spotsLeft="12"
      />

      <Event
        img="https://secure-content.meetupstatic.com/images/classic-events/502044040/222x125.webp"
        date="SUN, DEC 11 - 8:00 PM GMT -5"
        title="Soccer Pickup"
        location="Bushwick, NY"
        peopleConfirmed="3"
        spotsLeft="12"
      />
      <Event
        img="https://secure-content.meetupstatic.com/images/classic-events/502044040/222x125.webp"
        date="SUN, DEC 11 - 8:00 PM GMT -5"
        title="Soccer Pickup"
        location="Bushwick, NY"
        peopleConfirmed="3"
        spotsLeft="12"
      />
    </div>
  );
};
