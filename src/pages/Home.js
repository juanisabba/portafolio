import React from "react";
import logo from "../images/logo.png";
import PDF from "../images/juani-sabbatini-english-cv.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/home.css";

export default function Home({ checked }) {
  let name = "<JUANI SABBATINI/>";
  return (
    <div className="Home" id="home">
      <div className="name">
        <h1>{!checked ? `HI, I'M ${name}` : `HOLA, SOY ${name}`}</h1>
        <p>
          Fullstack developer in Javascript with a great passion for coding.
        </p>
        <a href={PDF} download={PDF}>
          <button type="button">See my CV</button>
        </a>
      </div>
      <img src={logo} className="developer" alt="Developer" />
      <a href="/#about-me">
        <FontAwesomeIcon
          icon={faArrowRight}
          aria-hidden="true"
          className="arrow right-arrow"
        />
      </a>
    </div>
  );
}
