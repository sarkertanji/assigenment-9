import React from "react";
import CommonNavigation from "../Navigation/CommonNavigation";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <CommonNavigation></CommonNavigation>
      <h1>this is about page</h1>
      <h2>you can learn about us from here</h2>
      <h3>But the things is, we're still developing this page</h3>
      <h4>so you have to wait for a while for details about us</h4>
      <h4>we will reach you soon</h4>
      <h4 id="about">thank you for your cooperation, have a good day</h4>
    </div>
  );
};

export default About;
