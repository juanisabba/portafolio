import React from "react";
import portfolio from "../../images/portfolio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../styles/projects.css";

export default function Portfolio({checked}) {
  return (
      <div className="Project" id="portfolio">
        <img src={portfolio} alt="Portfolio" className="project-image" />
        <div className="project-info">
          <h3 className="project-text">
          {!checked
                ? `This is my personal portfolio, where there are some of my
                projects and the information about me.`
                : `Este es mi portafolio personal en donde están algunos de mis 
                  proyectos y la información acerca de mí.`}
            <br />
            <br />
            <span className="languages">React</span>
          </h3>
          <div className="buttons-project">
            <a
              href="https://github.com/juanisabba/portafolio"
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
          </div>
        </div>
      </div>
  );
}
