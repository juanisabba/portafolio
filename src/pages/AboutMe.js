import React from "react";
import profile from "../images/profile-pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/about-me.css";

export default function AboutMe({checked, setShowProject}) {
  return (
      <div className="About-me">
        <div className="about-me-grid">
          <div className="juani-info">
            <div className="information">
              <h1>{!checked ? 'About me': 'Sobre mi'}</h1>
              {!checked
                ? `Hi, my name is Juan Ignacio Sabbatini, I'm a fullstack junior
              developer in Javascript, using both the frontend with React
              and the Backend with Node. I'm looking for my first job as a web
              developer to put all my knowledge into practice and be able to
              continue learning every day.`
                : `Hola, mi nombre es Juan Ignacio Sabbatini, soy un desarrollador 
                junior fullstack en Javascript, dominando tanto el frontend con React 
                y el Backend con Node. Estoy en busca de mi primer empleo como desarrollador 
                web para poner en práctica todos mis conocimientos y poder continuar 
                aprendiendo día a día.
              `}
            </div>
            <div className="skills">
              <h1>{!checked ? 'Skills' : 'Tecnologías'}</h1>
              <div className="skills-list">
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>SASS</li>
                  <li>Bootstrap</li>
                </ul>
                <ul>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>Git / GitHub</li>
                </ul>
                <ul>
                  <li>Node JS</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
          <img className="profile-pic" src={profile} alt="" />
        </div>
        <a href="/#home">
      <FontAwesomeIcon
                icon={faArrowLeft}
                aria-hidden="true"
                className="arrow left-arrow"
              />
      </a>
      <a onClick={()=>setShowProject(0)} href="/#projects">
      <FontAwesomeIcon
                icon={faArrowRight}
                aria-hidden="true"
                className="arrow right-arrow"
              />
      </a>

      </div>
  );
}
