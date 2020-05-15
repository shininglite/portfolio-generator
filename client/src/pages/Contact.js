import React from "react";
import ContactComp from "../components/Contact";
import { NavigationBar } from "../components/HomeNav";

function Contact() {
  return (
    <div>
      <NavigationBar />
      <ContactComp></ContactComp>
    </div>
  );
}

export default Contact;
