import React from "react";
import "./style.css";
// import { InputGroup } from 'react-bootstrap';
// import { FormControl } from "react-bootstrap"
// import "./contactStyle.css"

function AboutMeComp() {
  return (
    
    <div className="aboutContainer">
      <div className = "container">
      <h1>Portfolio Generator</h1>
      <h3>Description</h3>
      <p>
        Portfolio Generator is a React app that automatically creates a curated
        portfolio from a developer's GitHub projects. The portfolio is presented
        in a standardized format for potential employers, or others, to view.
      </p>
      <h3>Why Use Portfolio Generator</h3>
      <p>
        Developers have limited time to devote to creating an attractive way to
        display their projects. Because developers typically have multiple
        projects in various stages of completion, they may not wish to include
        all of them in their portfolio. Portfolio Generator was created to
        automatically produce a professional portfolio using a subset of a
        developer's GitHub projects.
      </p>
      <h3>How Portfolio Generator Works</h3>
      <p>
        This application allows a developer to retrieve their GitHub projects
        and select any, or all, of those to automatically create an attractive
        portfolio.
      </p>
      <h3>Developer Instructions</h3>
      <p>
        Developers can sign up to create an account. Enter your GitHub username
        to retrieve your full list of projects. Click anywhere in a project row to
        make that project active. Active projects will appear on your portfolio page. If you want to include a link to the site where your project is deployed, include the full link. can optionally include a link. For instructions to clone or contribute to this
        project, see the <a href="./../../../README.md">read me</a>.
      </p>
      <h3>Contributors</h3>
      <hr></hr>
      <p>John Cannon</p>
      <p>
        <a
          href="https://github.com/frunox/"
          alt="John Cannon's GitHub Projects"
        >
          John's GitHub Projects
        </a>
      </p>
      <hr></hr>
      <p>Shawn Hayes</p>
      <p>
        <a
          href="https://github.com/srfrog1970/"
          alt="Shawn Hayes' GitHub Projects"
        >
          Shawn's GitHub Projects
        </a>
      </p>
      <hr></hr>
      <p>Tom van Deusen</p>
      <p>
        <a
          href="https://github.com/shininglite/"
          alt="Tom van Deusen's GitHub Projects"
        >
          Tom's GitHub Projects
        </a>
      </p>
      <hr></hr>
      <p>Yeng Vang</p>
      <p>
        <a href="https://github.com/YengHV/" alt="Yeng Vang's GitHub Projects">
          Yeng's GitHub Projects
        </a>
      </p>
    </div>
    </div>
  );
}
export default AboutMeComp;
