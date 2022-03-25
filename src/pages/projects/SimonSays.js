import React from "react";
import simonSays from "../../images/simon-says.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../styles/projects.css";

export default function SimonSays({checked}) {
  return (
      <div className="Project" id="simon-says">
        <img
          src={simonSays}
          alt="Simon Says"
          className="project-image"
        />
        <div className="project-info">
          <h3 className="project-text">
          {!checked
                ? `The popular game where you have to remember the color and order. 
                  Created with HTML, CSS and JavaScript.`
                : `El popular juego donde tenés que recordar el color y el orden. 
                  Creado con HTML, CSS y JavaScript.
`}
            <br />
            <br />
            <span className="languages">HTML</span>
            <span className="languages">CSS</span>
            <span className="languages">JavaScript</span>
          </h3>
          <div className="buttons-project">
            <a
              href="https://github.com/juanisabba/simon-says/"
              target="_blank"
              rel="noreferrer"
            >
              See it on GitHub{" "}
              <FontAwesomeIcon
                icon={faGithub}
                aria-hidden="true"
                className="button-icon"
              />
            </a>
            <a
              href="https://juanisabba.github.io/simon-says/"
              target="_blank"
              rel="noreferrer"
            >
              See the website{" "}
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                aria-hidden="true"
                className="button-icon"
              />
            </a>
          </div>
        </div>
      </div>
  );
}
