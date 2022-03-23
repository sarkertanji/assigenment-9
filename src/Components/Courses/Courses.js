import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = (props) => {
  console.log(props);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./corses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="courses-container">
      {props.children}
      <h1>Choose Your Course</h1>
      <small>
        Lorem ipsum dolor sit amet, consectetur adippisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut
        enim ad minim veniam, quis nostrud
      </small>
      <div className="courses-detail-container">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
      <button>View All Courses</button>
    </div>
  );
};

export default Courses;
