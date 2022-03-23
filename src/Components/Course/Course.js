import React from "react";
import "./Course.css";
import Rating from "@mui/material/Rating";

const Course = (props) => {
  console.log(props.course);
  const { coarseName, img, price, rating, seats } = props.course;
  return (
    <div className="course-detail-container">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="course-text">
        <h3>{coarseName}</h3>
        <Rating name="disabled" value={rating} disabled />
        <p>${price}</p>
        <small>Total {seats} Seats</small>
      </div>
    </div>
  );
};

export default Course;
