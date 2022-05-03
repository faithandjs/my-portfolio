import React, { useState } from "react";
import "./home.css";
import github from "./images/github.png";
import code from "./images/code.png";
import phone from "./images/phone.png";
import linkedin from "./images/linkedin.png";
import email from "./images/email.PNG";
import "./sass/style.scss";
import Card from "./card";

export const Home = () => {
  const [data, setData] = useState(require("./data.json"));

  
  return (
    <div className="body">
      <section className="introduction">
        <div className="texts">
          <div className="h1">
            <h1>hi, i'm Faith</h1>
          </div>
          <div className="text">
            <div className="about">
              Hey there! My name is Faith Okogbo and I am a Nigeria-based
              frontend developer. I am fascinated by the ability to tranform
              beautiful designs into actual websites and I enjoy the proces of
              it.
            </div>
            <ul className="skills">
              <li>
                <span className="header">Languages: </span>
                <span>Javascript, Typescript, CSS(SASS).</span>
              </li>
              <li>
                <span className="header">Libraries/Frameworks: </span>
                <span>React, Bootstrap.</span>
              </li>
              <li>
                <span className="header">Concepts: </span>
                <span>GraphQL, Redux.</span>
              </li>
            </ul>
          </div>
          <ul className="contact">
            <li>
              <a href="mailto:okogbofaith@gmail.com" target="_blank">
                <img src={email} />
              </a>
            </li>
            <li>
              <a href="tel:+2349043126914" target="_blank">
                <img src={phone} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/okogbo-faith"
                target="_blank"
              >
                <img src={linkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/faithandjs" target="_blank">
                <img src={github} />
              </a>
            </li>
          </ul>
        </div>

        <div className="image">
          <img src={code} />
        </div>
      </section>

      <section className="work">
        <h3>portfolio</h3>
        <div className="gallery">
          <Card props={data.projects[0]} />
          <Card props={data.projects[1]} />
          <Card props={data.projects[2]} />
          <Card props={data.projects[3]} />
          <Card props={data.projects[4]} />
        </div>
          
          <div className="cv">
            <a href="okogbo-faith-cv.pdf" download>
              Download CV
            </a>
          </div>
      </section>
      
      <footer className="contact" id="contact">
       
      </footer>
    </div>
  );
};
