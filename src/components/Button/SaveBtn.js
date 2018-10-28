import React from "react";
import "./Btn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const SaveBtn = props =>
  <span className="save-btn" {...props}>
    <i className="fa fa-star"></i>
  </span>;

export default SaveBtn;