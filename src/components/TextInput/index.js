import React from "react";
import PropTypes from "prop-types";
import "./TextInput.css";

const TextInput = ({
  onChange,
  placeholder,
  name,
  value,
  required,
  className,
  type,
}) => (
  <input
    className={`${className} BlackInputText`}
    type={type}
    placeholder={`${placeholder}${required ? " *" : ""}`}
    name={name}
    value={value}
    onChange={(e) => {
      onChange(e);
    }}
  />
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  value: "",
  required: false,
  type: "text",
};

export default TextInput;
