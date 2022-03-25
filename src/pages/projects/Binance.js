import React from "react";
import binance from "../../images/binance.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../styles/projects.css";

export default function Juaniflix({checked}) {
  return (
      <div className="Project" id="binance">
        <img src={binance} alt="Binance" className="project-image" />
        <div className="project-info">
          <h3 className="project-text">
          {!checked
                ? `This is a Binance clone where you can search for every crypto and all its stats. 
                Created with React js and Material UI.`
                : `Un clon de Binance, donde podes buscar todas las principales criptomonedas y todas 
                sus estadísticas. Creado con React js y Material UI.`}
            <br />
            <br />
            <span className="languages">React</span>
          </h3>
          <div className="buttons-project">
            <a
              href="https://github.com/juanisabba/binance/"
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
              href="https://crypto-binance.netlify.app/"
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
