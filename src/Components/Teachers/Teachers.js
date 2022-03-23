import React, { useEffect, useState } from "react";
import Teacher from "../Teacher/Teacher";
import "./Teachers.css";

const Teachers = (props) => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("./teachers.JSON")
      .then((response) => response.json())
      .then((json) => setTeachers(json));
  }, []);
  return (
    <div>
      {props.children}
      <h1>Our Teachers Community </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adippisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut
        enim ad minim veniam, quis nostrud
      </p>
      <div className="teachers-detail-container">
        {teachers.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher}></Teacher>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
