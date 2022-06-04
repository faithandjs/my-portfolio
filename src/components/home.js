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
            <h1>
              <span className="hi">hi, i'm Faith</span>
              <br />
              <span>
                and I'm a{" "}
                <span style={{ color: "#ffa4c2" }}>frontend developer</span>
                <span className="wave">👋🏽</span>
              </span>
            </h1>
          </div>
          <div className="text">
            <div className="about">
              I have always been fascinated by the ability to transform
              beautiful web designs into actual websites, hence frontend
              development was a natural path for me.
              <br /> <br />
            </div>
            <div className="services">
              <p className="head">services</p>
              <ul>
                <li>
                  I develop accessible webpages for web and mobile applications.
                </li>
                <li>I manage and maintain websites.</li>
                {/*In my free time, I enjoy reading, watching movies or exercising.
             <li>I manage and maintain websites.</li> */}
              </ul>
            </div>{" "}
            <br /> 
            <div className="skills">
              <div className="technical">
                <div className="head">technical skills</div>
                <ul>
                  <li>
                    <span className="header">Languages:</span>
                    <span> Javascript, Typescript, CSS, SASS/SCSS.</span>
                  </li>
                  <li>
                    <span className="header">Libraries/Tools:</span>
                    <span> Next Js, React, Bootstrap, Git/Github.</span>
                  </li>
                  <li>
                    <span className="header">Concepts:</span>
                    <span> GraphQL, Redux, RESTful APIs.</span>
                  </li>
                </ul>
              </div>
              <div className="non-tech">
                <div className="head">Non-technical skills</div>
                <ul>
                  <li className="item">video editing.</li>
                </ul>
              </div>
            </div>{" "}
            <br /> 
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

      <footer className="contact" id="contact"></footer>
    </div>
  );
};
