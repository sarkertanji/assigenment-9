import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/teacher">Teacher</Link>
        <Link to="/review">Review</Link>
      </nav>
      <div className="header-text-container">
        <h1>
          Learn with us <br />
          anytime from anywhere
        </h1>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Voluptatum sapiente voluptates iusto tempore laboriosam <br />
          sed fugiat, magni facilis reprehenderit officiis
        </small>
        <div>
          <button className="btn-regular">Start Now</button>
          <button className="btn-regular">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
