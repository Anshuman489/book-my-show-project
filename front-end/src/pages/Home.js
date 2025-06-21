import React, { use } from "react";
import SelectMovie from "../components/SelectMovie";
import LastBookingDetails from "../components/LastBookingDetails";
import TimeSchedule from "../components/TimeSchedule";
import SelectSeats from "../components/SelectSeats";
import "../CSS/Home.css"; // Assuming you have a CSS file for styling
import BsContext from "../Context/BsContext";

const Home = () => {

  const context = use(BsContext);

  const  {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorpopup,
    setErrorMessage
  } = context

  const handleBookNow = () => {
    if (!movie){
      setErrorpopup(true)
      setErrorMessage("Please select a movie");
    }
    if (!time){
      setErrorpopup(true)
      setErrorMessage("Please select a time slot");
    }
    if (Object.values(noOfSeat).every(seat => seat === "")) {
      setErrorpopup(true)
      setErrorMessage("Please select at least one seat");
    }
    else{
      handlePostBooking();
    }
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="select_movie_component">
          <SelectMovie />
        </div>
        <div className="last_booking_details_container">
          <LastBookingDetails />
        </div>
      </div>
      <div className="time_seats_container">
        <TimeSchedule />
        <SelectSeats />
        <button className="BN-btn" onClick={()=>{
          handleBookNow()
        }}>Book Now</button>
      </div>
    </div>
  );
};

export default Home;
