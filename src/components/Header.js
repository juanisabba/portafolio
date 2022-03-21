import React, { useState } from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import UkFlag from "../images/uk-flag.png";
import SpainFlag from "../images/spain-flag.png";
import { Switch } from "@mui/material";
import Hamburger from "hamburger-react";

function Header({ checked, setChecked, handleChange, setShowProject }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="header">
        <ul>
          <li>
            <a className="home-icon" href="/#home">
              <FontAwesomeIcon
                icon={faHome}
                aria-hidden="true"
                className="icon home-icon"
              />
            </a>
          </li>
          <li>
            <a href="/#about-me">{!checked ? "ABOUT ME" : "SOBRE MI"}</a>
          </li>
          <li>
            <a onClick={()=>setShowProject(0)} href="/#projects">{!checked ? "PROJECTS" : "PROYECTOS"}</a>
          </li>
          <li>
            <a href="/#contact">{!checked ? "CONTACT" : "CONTACTO"}</a>
          </li>
        </ul>
        <div className="language__switch">
          <img src={UkFlag} alt="" onClick={() => setChecked(false)} />
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <img src={SpainFlag} alt="" onClick={() => setChecked(true)} />
        </div>
      </div>

      <div className={isOpen ? 'responsive__header responsive__header-open' : 'responsive__header'}>
        <div className="burger-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        {isOpen && (
          <>
            <ul>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  className="home-icon"
                  href="/#home"
                >
                  <FontAwesomeIcon
                    icon={faHome}
                    aria-hidden="true"
                    className="icon home-icon"
                  />
                </a>
              </li>
              <li>
                <a onClick={() => setOpen(false)} href="/#about-me">
                  {!checked ? "ABOUT ME" : "SOBRE MI"}
                </a>
              </li>
              <li>
                <a onClick={() => setOpen(false)} href="/#projects">
                  {!checked ? "PROJECTS" : "PROYECTOS"}
                </a>
              </li>
              <li>
                <a onClick={() => setOpen(false)} href="/#contact">
                  {!checked ? "CONTACT" : "CONTACTO"}
                </a>
              </li>
            </ul>
            <div className="language__switch">
              <img src={UkFlag} alt="" onClick={() => setChecked(false)} />
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <img src={SpainFlag} alt="" onClick={() => setChecked(true)} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Header;
