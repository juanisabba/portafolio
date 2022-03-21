import React, { useState, useEffect } from "react";
import "./App.css";
import ParticlesBg from "particles-bg";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Portfolio from "./pages/projects/Portfolio";
import { Routes, Route } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [checked, setChecked] = useState(() => {
    const saved = localStorage.getItem("isChecked");
    const initialValue = JSON.parse(saved);
    return initialValue || true;
  });
  const [showProject, setShowProject] = useState(0)
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate('/')
    setIsLoading(false)
  }, [isLoading, navigate]);

  useEffect(() => {
    localStorage.setItem("isChecked", JSON.stringify(checked));
  }, [checked]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div className="app">
        <ParticlesBg
          color="#39FF14"
          type="cobweb"
          bg={{
            position: "fixed",
            zIndex: -1,
            width: "100%",
            backgroundColor: "rgb(63, 58, 58)",
          }}
        />
        <Header
          checked={checked}
          handleChange={handleChange}
          setChecked={setChecked}
          setShowProject={setShowProject}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Swiper
                className="swiper"
                draggable={false}
                allowTouchMove={false}
              >
                <SwiperSlide>
                  <Home checked={checked} />
                </SwiperSlide>
                <SwiperSlide id="about-me">
                  <AboutMe checked={checked} setShowProject={setShowProject} />
                </SwiperSlide>
                <SwiperSlide id="projects">
                  <Projects showProject={showProject} setShowProject={setShowProject} checked={checked} />
                </SwiperSlide>
                <SwiperSlide id="contact">
                  <Contact checked={checked} setShowProject={setShowProject}/>
                </SwiperSlide>
              </Swiper>
            }
          />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
