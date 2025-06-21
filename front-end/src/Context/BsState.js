import { useState, useEffect } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
  const [errorPopup, setErrorpopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [movie, changeMovie] = useState("");
  const [time, changeTime] = useState("");
  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: ""
  });

  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  const handlePostBooking = async () => {
    const response = await fetch("http://localhost:8080/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie: movie,
        slot: time,
        seats: noOfSeat
      }),
    });

    const data = await response.json();
    setErrorpopup(true);
    setErrorMessage(data.message);
    
    if (response.ok) {
      changeTime("");
      changeMovie("");
      changeNoOfSeats({
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        D1: "",
        D2: ""
      });

      setLastBookingDetails(data.data);
      window.localStorage.clear();
    }

  };

  const handleGetBooking = async () => {
    const response = await fetch("http://localhost:8080/api/booking", {
      method: "GET"
    });

    const data = await response.json();
    if (response.ok) {
      setLastBookingDetails(data.data);
    } else {
      setLastBookingDetails(null);
    }
  }

  useEffect(() =>{
    const movie=window.localStorage.getItem("movie");
    const slot=window.localStorage.getItem("slot");
    const seats=JSON.parse(window.localStorage.getItem("seats"));

    if (movie){
      changeMovie(movie);
    }
    if (slot){
      changeTime(slot);
    }
    if (seats){
      changeNoOfSeats(seats);
    }
  }, [])

  return (
    <BsContext.Provider
      value={{
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetails,
        setLastBookingDetails,
        handleGetBooking,
        handlePostBooking,
        errorMessage,
        errorPopup,
        setErrorMessage,  
        setErrorpopup
      }}
    >
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;
