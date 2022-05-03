import React from "react";
import play from "./images/play.png";
import githubIcon from "./images/github.png";

function Card(props) {
  const { id, name, img, text, github, live, target } = props.props;
  const siteAlt = name + " website";
  const classes = "img" + id;
  console.log(props.props)
  return (
    <div className="card">
      <div className="img-box">
        <img src={img[0][0]} alt={siteAlt} className={classes} />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="text">{text}</div>
        <div className="icons">
          <a href={live} target={target}>
            <div className="live">
              <img src={play} alt="live site icon" />
            </div>
          </a>
          <a href={github} target={target}>
            <div className="github">
              <img src={githubIcon} alt="github icon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
