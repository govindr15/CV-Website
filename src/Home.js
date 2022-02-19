import React, { useEffect } from "react";
import "./Home.css";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".home__landing",
      {
        x: 0,
      },
      {
        duration: 2,
        delay: 3,
        x: "3000px",
        display: "none",
      }
    );
    gsap.fromTo(
      ".header__options",
      {
        display: "none",
      },
      {
        delay: 4,
        display: "flex",
      }
    );
    gsap.fromTo(
      ".home__content",
      {
        x: -window.screen.width,
      },
      {
        delay: 5,
        duration: 2,
        x: 0,
        display: "grid",
      }
    );
    gsap.fromTo(
      ".about",
      {
        display: "none",
      },
      {
        delay: 5,
        duration: 2,
        display: "grid",
      }
    );
    gsap.fromTo(
      ".projects",
      {
        display: "none",
      },
      {
        delay: 5,
        duration: 2,
        display: "grid",
      }
    );
    gsap.fromTo(
      ".contact",
      {
        display: "none",
      },
      {
        delay: 5,
        duration: 2,
        display: "grid",
      }
    );
    gsap.fromTo(
      ".footer",
      {
        display: "none",
      },
      {
        delay: 5,
        duration: 2,
        display: "grid",
      }
    );
    gsap.to(".home__toggleHome", {
      delay: 5,
      display: "flex",
    });
    gsap.fromTo(
      ".home__title",
      {
        x: -window.screen.width,
        opacity: 0,
      },
      {
        delay: 6,
        duration: 3,
        opacity: 1,
        x: 0,
      }
    );
    gsap.fromTo(
      ".home__description",
      {
        x: window.screen.width,
        opacity: 0,
      },
      {
        delay: 7,
        duration: 3,
        opacity: 1,
        x: 0,
      }
    );
    var tl2 = new gsap.timeline({ delay: 10, repeat: -1 })
      .fromTo(
        ".home__content",
        4,
        {
          x: 0,
        },
        { x: window.screen.width, display: "none" }
      )
      .fromTo(
        ".home__toggle__i1",
        0.01,
        { color: "#00ffbb" },
        { delay: -1, color: "white" }
      )
      .fromTo(
        ".home__toggle__i2",
        0.01,
        { color: "white" },
        { delay: -1, color: "#00ffbb" }
      )
      .fromTo(
        ".home__content_n",
        4,
        {
          x: -window.screen.width,
          display: "none",
        },
        { x: 0, display: "grid" }
      )
      .fromTo(
        ".home__content_n",
        4,
        {
          x: 0,
        },
        { x: window.screen.width, display: "none" }
      )
      .fromTo(
        ".home__toggle__i1",
        0.01,
        { color: "white" },
        { delay: -1, color: "#00ffbb" }
      )
      .fromTo(
        ".home__toggle__i2",
        0.01,
        { color: "#00ffbb" },
        { delay: -1, color: "white" }
      )
      .fromTo(
        ".home__content",
        4,
        {
          x: -window.screen.width,
        },
        { x: 0, display: "grid" }
      );
  });

  return (
    <div className="home">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap');
      </style>
      <div className="home__landing">Welcome</div>
      <div className="header">
        <div className="header__options">
          <div className="header__option">Home</div>
          <div className="header__option">About</div>
          <div className="header__option">Projects</div>
          <div className="header__option">Contact</div>
        </div>
      </div>
      <div className="home__content">
        <div className="home__title">
          <div className="home__title1">Govind</div>
          <div className="home__title2">Radhakrishnan Nair</div>
        </div>
        <div className="home__description">I'm a Full-Stack Web Developer</div>
      </div>
      <div className="home__content_n">
        <div className="home__title">
          <div className="home__title1">Areas of Expertise</div>
          <div className="home__title2">Include</div>
        </div>
        <div className="home__description">
          Javascript, React, HTML, CSS, Java, SQL, GraphQL and many more.
        </div>
      </div>
      <div className="home__toggleHome">
        <div className="home__toggle__icons">
          <CircleIcon className="home__toggle__i1" fontSize="medium" />
          <CircleIcon className="home__toggle__i2" fontSize="medium" />
        </div>
      </div>
    </div>
  );
}

export default Home;
