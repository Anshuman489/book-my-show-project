import React, { use } from "react";
import { slots } from "../data";
import RadioComponent from "./RadioComponent";
import "../CSS/TimeSchedule.css"; // Assuming you have a CSS file for styling
import BsContext from "../Context/BsContext"; // Importing the context

const TimeSchedule = () => {
  const context = use(BsContext);
  const { time, changeTime } = context;

  const handleChangeItem = (val) => {
    changeTime(val);
    window.localStorage.setItem("slot", val);
  }
  return (
    <>
      <div className="Slot_container">
        <h1 className="TS_heading">Select a Schedule</h1>
        <div className="TS_main_container">
          {slots.map((el, index) => {
            return (
              <RadioComponent
                text={el}
                key={index}
                data={time}
                changeSelection={handleChangeItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeSchedule;
