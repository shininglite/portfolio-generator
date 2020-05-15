import React from "react";
import AboutMeComp from "../components/AboutMeComp/AboutMeComp";
import { NavigationBar } from "../components/HomeNav";

function About() {
  return (
    <div>
      <NavigationBar />
      <AboutMeComp></AboutMeComp>
    </div>
  );
}
export default About;
