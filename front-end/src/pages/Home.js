import React from "react";
import SelectMovie from "../components/SelectMovie";
import LastBookingDetails from "../components/LastBookingDetails";
import TimeSchedule from "../components/TimeSchedule";
import SelectSeats from "../components/SelectSeats";
import "../CSS/Home.css"; // Assuming you have a CSS file for styling

const Home = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div classname="select_movie_component">
          <SelectMovie />
        </div>
        <div className="last_booking_details_container">
          <LastBookingDetails />
        </div>
      </div>
      <div className="time_seats_container">
        <TimeSchedule />
        <SelectSeats />
        <button className="BN-btn">Book Now</button>
      </div>
    </div>
  );
};

export default Home;
