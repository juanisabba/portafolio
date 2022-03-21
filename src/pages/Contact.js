import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/contact.css";

function Contact({checked, setShowProject}) {
  return (
      <div className="Contact">
        <h1 className="title">CONTACT</h1>
        <h1 className="static-title">CONTACT</h1>
        <ul className="icons-list">
          <li>
            <a
              href="mailto:juanisabbatini@hotmail.com"
              target="_blank"
              rel="noreferrer"
              className="email-link"
              onMouseEnter={() => {
                document.querySelector(".title").textContent = "EMAIL";
                document.querySelector(".title").style.color = "blue";
              }}
              onMouseLeave={() => {
                document.querySelector(".title").textContent = "CONTACT";
                document.querySelector(".title").style.color =
                  "var(--title-color)";
              }}
            >
              <div className="line line1"></div>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="6x"
                aria-hidden="true"
                className="icon"
              />
            </a>
          </li>

          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5491138649922"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-link"
              onMouseEnter={() => {
                document.querySelector(".title").textContent = "WHATSAPP";
                document.querySelector(".title").style.color = "#00bb2d";
              }}
              onMouseLeave={() => {
                document.querySelector(".title").textContent = "CONTACT";
                document.querySelector(".title").style.color =
                  "var(--title-color)";
              }}
            >
              <div className="line line2"></div>
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="6x"
                aria-hidden="true"
                className="icon"
              />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/juanisabba"
              target="_blank"
              rel="noreferrer"
              className="github-link"
              onMouseEnter={() => {
                document.querySelector(".title").textContent = "GITHUB";
                document.querySelector(".title").style.color = "#fff";
              }}
              onMouseLeave={() => {
                document.querySelector(".title").textContent = "CONTACT";
                document.querySelector(".title").style.color =
                  "var(--title-color)";
              }}
            >
              <div className="line line3"></div>
              <FontAwesomeIcon
                icon={faGithub}
                size="6x"
                aria-hidden="true"
                className="icon"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/juanisabbatini/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-link"
              onMouseEnter={() => {
                document.querySelector(".title").textContent = "LINKEDIN";
                document.querySelector(".title").style.color = "#1664b1";
              }}
              onMouseLeave={() => {
                document.querySelector(".title").textContent = "CONTACT";
                document.querySelector(".title").style.color =
                  "var(--title-color)";
              }}
            >
              <div className="line line4"></div>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="6x"
                aria-hidden="true"
                className="icon"
              />
            </a>
          </li>
        </ul>
        <a onClick={()=>setShowProject(0)} href="/#projects">
      <FontAwesomeIcon
                icon={faArrowLeft}
                aria-hidden="true"
                className="arrow left-arrow"
              />
      </a>

      </div>
  );
}

export default Contact
