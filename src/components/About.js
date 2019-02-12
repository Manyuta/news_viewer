import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
      Get breaking news headlines, and search for articles from over 30,000 news sources and blogs with our news API.
      </p>
    </div>
  );
};

export default Rainbow(About);
