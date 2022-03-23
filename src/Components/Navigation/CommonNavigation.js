import React from "react";
import "./CommonNavigation.css";
import { Link } from "react-router-dom";

const CommonNavigation = () => {
  return (
    <div className="common-nav">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/teacher">Teacher</Link>
        <Link to="/review">Review</Link>
      </nav>
    </div>
  );
};

export default CommonNavigation;
