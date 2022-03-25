import React from "react";
import portfolio from "../images/portfolio.png";
import juaniflix from "../images/juaniflix.png";
import simonSays from "../images/simon-says.png";
import binance from "../images/binance.png";
import "../styles/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Portfolio from "./projects/Portfolio";
import Juaniflix from "./projects/Juaniflix";
import SimonSays from "./projects/SimonSays";
import Binance from "./projects/Binance";

export default function Projects({ checked, showProject, setShowProject }) {
  return (
    <div className="Projects">
      <h1 className="top-projects">TOP PROJECTS</h1>
      <div className="container">
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>01</h2>
            <h3>PORTFOLIO</h3>
            <img src={portfolio} alt="Juaniflix" />
            <p>
              {!checked
                ? `This is my personal portfolio, where there are some of my
                projects and the information about me.`
                : `Este es mi portafolio personal en donde están algunos de mis 
                  proyectos y la información acerca de mí.`}
            </p>
            <a onClick={() => setShowProject(1)} href="/#portfolio">
              {!checked ? "SEE MORE" : "MÁS INFO"}
            </a>
          </div>
        </div>

        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>02</h2>
            <h3>NETFLIX CLONE</h3>
            <img src={juaniflix} alt="Juaniflix" />
            <p>
              {!checked
                ? ` Juaniflix it's a Netflix clone created with React js, Omdb Api,
                Swiper and Material UI.`
                : `Juaniflix es un clon de Netflix sumamente completo. Creado con 
                  React, Omdb Api, Swiper y Material UI.
                `}
            </p>
            <a onClick={() => setShowProject(2)} href="/#juaniflix">
              {!checked ? "SEE MORE" : "MÁS INFO"}
            </a>
          </div>
        </div>

        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>03</h2>
            <h3>BINANCE</h3>
            <img src={binance} alt="Binance" />
            <p>
              {!checked
                ? `This is a Binance clone where you can search for every crypto and all its stats. 
                Created with React js and Material UI.`
                : `Un clon de Binance, donde podes buscar todas las principales criptomonedas y todas 
                sus estadísticas. Creado con React js y Material UI.`}
            </p>
            <a onClick={() => setShowProject(4)} href="/#binance">
              {!checked ? "SEE MORE" : "MÁS INFO"}
            </a>
          </div>
        </div>

        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>04</h2>
            <h3>SIMON SAYS</h3>
            <img src={simonSays} alt="Simon Says" />
            <p>
              {!checked
                ? `The popular game where you have to remember the color and order. 
                  Created with HTML, CSS and JavaScript.`
                : `El popular juego donde tenés que recordar el color y el orden. 
                  Creado con HTML, CSS y JavaScript.
`}
            </p>
            <a onClick={() => setShowProject(3)} href="/#simon-says">
              {!checked ? "SEE MORE" : "MÁS INFO"}
            </a>
          </div>
        </div>

        {showProject === 1 && <Portfolio checked={checked} />}
        {showProject === 2 && <Juaniflix checked={checked}/>}
        {showProject === 3 && <SimonSays checked={checked}/>}
        {showProject === 4 && <Binance checked={checked}/>}
      </div>
      <a href="/#about-me">
        <FontAwesomeIcon
          icon={faArrowLeft}
          aria-hidden="true"
          className="arrow left-arrow"
        />
      </a>
      <a href="/#contact">
        <FontAwesomeIcon
          icon={faArrowRight}
          aria-hidden="true"
          className="arrow right-arrow"
        />
      </a>
    </div>
  );
}
