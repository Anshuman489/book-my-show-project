import React from "react";
import "../CSS/RadioComponent.css";

const RadioComponent = ({ text, changeSelection, data }) => {
  const handleChecked = (val) => {
    changeSelection(val);
  };

  return (
    <div
      name={text}
      className={`form_check_label ${data === text ? "active" : "inactive"}`}
      onClick={() => {
        handleChecked(text);
      }}
    >
      <span className="text">{text}</span>
    </div>
  );
};

export default RadioComponent;
