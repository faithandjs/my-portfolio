import React, { useState } from "react";
import "./home.css";
import play from "./images/play.png";
import code from "./images/code.png";
import react from "./images/react.png";
import bootstrap from "./images/bootstrap.png";
import sass from "./images/sass.png";
import graphql from "./images/graphql.png";
import css from "./images/css.png";
import js from "./images/js.png";
import ts from "./images/typescript.png";
import phone from "./images/phone.png";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import email from "./images/email.PNG";
import restaurant from "./images/restaurant11.jpg";
import ics from "./images/interactive-cs1.jpg";
import ip from "./images/ip-address-tracker1.jpg";
import portfolio from "./images/portfolio1.jpg";
import REST from "./images/REST-countries-api.jpg";
import "./sass/style.scss";

export const Home = () => {
  const [data, setData] = useState(require("./data.json"));
  const [datum, setDatum] = useState({
    title: "",
    img: [],
    text: "",
    github: "",
    live: "",
    target: "",
  });
  const settingDatum = (n) => {
    const { name, img, text, github, live, target } = data.projects[n];
    console.log(data.projects[n], 1);
    setDatum({ title: name, img, text, github, live, target });
  };
  const carousel = (item, index) => {
    let classes;
    if (index === 0) {
      classes = "carousel-item active";
    } else {
      classes = "carousel-item";
    }
    console.log(classes);
    return (
      <div className={classes}>
        <img
          src={item[index]}
          className="d-block w-100"
          alt="preview of my restaurants website"
        />
      </div>
    );
  };
  console.log("datum", datum.img);
  return (
    <div className="body">
      <section className="introduction">
        <div>
          hi, i'm Faith
          <br />
          and I'm a frontend developer
        </div>
        <div className="image">
          <img src={code} />
        </div>
      </section>
      <div className="spacer layer"></div>
      <section className="about">
        <h3>Profile</h3>
        <div className="about-text">
          Hey there! My name is Okogbo Faith and I am a Nigeria-based frontend
          developer. I had my first coding experience in December 2020 and it
          has been a wonderful experience so far. As a self-taught developer, I
          have prioritised connecting with other developers to to check notes
          with and keep me on the right track and so far, taht has been my most
          reliable way of learning. Being a programmer means a lot of learning,
          practicing and building and I am enjoying this journey of self
          improvement. Thank you for checking out my portfolio, you can check
          out my projects on{" "}
          <a href="https://github.com/faithandjs" target="_blank">
            github
          </a>
          .
        </div>

        <div className="skills">
          <h4>Skills</h4>
          <ul className="dev-icons">
            <li>
              <img src={js} />
              <p>Javascript</p>
            </li>
            <li>
              <img src={ts} />
              <p>Typescript</p>
            </li>
            <li>
              <img src={css} />
              <p>CSS</p>
            </li>
            <li>
              <img src={react} />
              <p>React Js</p>
            </li>
            <li>
              <img src={bootstrap} />
              <p>Bootstrap</p>
            </li>
            <li>
              <img src={sass} />
              <p>SASS</p>
            </li>
            <li>
              <img src={graphql} />
              <p>GraphQL</p>
            </li>
          </ul>
        </div>
        <div className="about-text">
          I am currently searching for internship opportunities or entry level
          jobs thank you and <a href="#contact">do reach out</a>.
        </div>
      </section>

      <section className="work">
        <h3>My work</h3>
        <div className="gallery">
          <div
            className="img-box"
            data-toggle="modal"
            onClick={() => {
              settingDatum(1);
            }}
            data-target="#modal"
          >
            <img src={REST} />
          </div>
          <div
            className="img-box"
            data-toggle="modal"
            onClick={() => {
              settingDatum(2);
            }}
            data-target="#modal"
          >
            <img src={ics} />
          </div>
          <div
            className="img-box"
            data-toggle="modal"
            onClick={() => {
              settingDatum(3);
            }}
            data-target="#modal"
          >
            <img src={ip} />
          </div>
          <div
            className="img-box"
            data-toggle="modal"
            onClick={() => {
              settingDatum(4);
            }}
            data-target="#modal"
          >
            <img src={portfolio} />
          </div>
        </div>
        <div className="extras">
          <div className="see-more">
            <a
              href="https://github.com/faithandjs?tab=repositories"
              target="_blank"
            >
              More
            </a>
          </div>
          <div className="btn">
            <a href="okogbo-faith-cv.pdf" download>
              Download CV
            </a>
          </div>
        </div>
      </section>
      <div className="spacer layer1"></div>
      <section className="contact" id="contact">
        <h4>contact me</h4>
        <ul>
          <li>
            <a
              href="mailto:okogbofaith@gmail.com"
              target="_blank"
              title="okogbofaith@gmail.com"
            >
              <img src={email} />
            </a>
          </li>
          <li>
            <a href="tel:+2349043126914" target="_blank" title="+2349043126914">
              <img src={phone} />
            </a>
          </li>
          {/*<li>
                        <a href='' target='_blank' title=''><img src={twitter} /></a>
                    </li>*/}
          <li>
            <a
              href="https://www.linkedin.com/in/okogbo-faith"
              target="_blank"
              title="https://www.linkedin.com/in/okogbo-faith"
            >
              <img src={linkedin} />
            </a>
          </li>
        </ul>
      </section>

      <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
        aria-labelledby="preview of restaurant prompt"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  {datum.img.map((item, index) => {
                    let classes;
                    if (index === 0) {
                      classes = "carousel-item active";
                    } else {
                      classes = "carousel-item";
                    }
                    console.log(classes);
                    return (
                      <div className={classes}>
                        <img
                          src={item[index]}
                          className="d-block w-100"
                          alt="preview of my restaurants website"
                        />
                      </div>
                    );
                  })}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-target="#carouselExampleControls"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-target="#carouselExampleControls"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <div className="caption">{datum.text}</div>
              <div className="footer-btns">
                <a href={datum.github} target="_blank">
                  <div>
                    <img src={github} />
                  </div>
                </a>
                <a href={datum.live} target={datum.target}>
                  <div>
                    <img src={play} />
                  </div>
                </a>

                {/* <button type='button' className='btn close-modal' data-dismiss='modal'>x</button>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
