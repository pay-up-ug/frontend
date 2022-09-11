import React from "react";
import "./MajorButton.css";

const MajorButton = (props) => {
  const { label, className,disable } = props;
  return (
    <button
      disabled={disable}
      className={`Major-Btn uppercase ${className}`}
      onClick={props.onClick}
    >
      {label}
    </button>
  );
};

export default MajorButton;
