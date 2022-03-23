import React from "react";
import Courses from "../Courses/Courses";
import Header from "../Header/Header";
import Teachers from "../Teachers/Teachers";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Courses></Courses>
      <Teachers></Teachers>
    </div>
  );
};

export default Home;
