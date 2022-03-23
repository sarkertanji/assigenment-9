import React from "react";
import "./Teacher.css";

const Teacher = (props) => {
  const { name, email, website } = props.teacher;
  return (
    <div className="teacher">
      <h1>{name}</h1>
      <small>
        Email <span> {email}</span>
      </small>
      <small>
        Website <span>{website}</span>
      </small>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br /> sed do
        eiusmodtempor incididunt ut labore et dolore magna aliqua. <br /> Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
      </p>
      <button>Profile</button>
    </div>
  );
};

export default Teacher;
