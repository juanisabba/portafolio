import React from "react";
import juaniflix from "../../images/juaniflix.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../styles/projects.css";

export default function Juaniflix({checked}) {
  return (
      <div className="Project" id="juaniflix">
        <img src={juaniflix} alt="Juaniflx" className="project-image" />
        <div className="project-info">
          <h3 className="project-text">
          {!checked
                ? ` Juaniflix it's a Netflix clone created with React js, Omdb Api
                and Material UI.`
                : `Juaniflix es un clon de Netflix sumamente completo. Creado con 
                  React,TMDB Api, Swiper y Material UI.
                `}
            <br />
            <br />
            <span className="languages">React</span>
          </h3>
          <div className="buttons-project">
            <a
              href="https://github.com/juanisabba/juaniflix/"
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
              href="https://juanisabba.github.io/juaniflix/"
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
