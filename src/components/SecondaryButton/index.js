import React from "react";
import "./SecondaryButton.css";

const SecondaryButton = (props) => {
  const { label, className,disable } = props;
  return (
    <button
      disabled={disable}
      className={`Secondary-Btn uppercase ${className}`}
      onClick={props.onClick}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
