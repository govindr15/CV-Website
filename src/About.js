import React, { useEffect } from "react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function About() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {}, []);
  return (
    <div className="about">
      <section id="about_page">
        <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
          <div className="about__title">About Me</div>
        </AnimationOnScroll>
        <div className="about__me">
          <div className="about__experience">
            <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
              <div className="about__experience__title">experience</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
              <div className="experience1">
                <div className="section1">
                  <CircleOutlinedIcon className="section__circle" />
                  <AnimationOnScroll
                    animateIn="animate__bounceInUp"
                    animateOnce
                  >
                    <div className="vl"></div>
                  </AnimationOnScroll>
                </div>
                <div className="section2">
                  <div className="about__exp__title">Infosys Ltd</div>
                  <div className="about__exp__project">
                    Estee Lauder Companies Pvt Ltd
                  </div>
                  <div className="about__exp__timeline">
                    June 2020 - August 2021
                  </div>
                  <div className="about__exp__desc">
                    Migrating all the existing legacy functionalities into a Web
                    based application. Technology used is a Spring boot
                    application with Java used in backend and React as the
                    frontend framework, built using maven and deployed in the
                    server. Following Agile methodology and test-driven
                    development (TDD) approach as a development practice.
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
              <div className="experience2">
                <div className="section1">
                  <CircleOutlinedIcon className="section__circle" />
                  <AnimationOnScroll
                    animateIn="animate__bounceInUp"
                    animateOnce
                  >
                    <div className="vl"></div>
                  </AnimationOnScroll>
                </div>
                <div className="section2">
                  <div className="about__exp__title">Infosys Ltd</div>
                  <div className="about__exp__project">
                    National Broadband Networking
                  </div>
                  <div className="about__exp__timeline">
                    May 2018 - June 2020
                  </div>
                  <div className="about__exp__desc">
                    Worked in the Incident Management Team and the design
                    validation team. Incident management team were responsible
                    for resolving Network related and technical incidents raised
                    from across the NBN network. Technology involved were Java,
                    Spatial Net, AutoCAD, MapInfo Pro, Python
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
              <div className="experience3">
                <div className="section1">
                  <CircleOutlinedIcon className="section__circle" />
                </div>
                <div className="section2">
                  <div className="about__exp__title">Infosys Ltd</div>
                  <div className="about__exp__project">
                    Infosys Training Program
                  </div>
                  <div className="about__exp__timeline">
                    Dec 2017 - May 2018
                  </div>
                  <div className="about__exp__desc">
                    Generic Training completed in Python and SQL,and Stream
                    training in Java Enterprise Edition, SQL, Hibernate, HTML,
                    CSS and JavaScript. Completed the training as a "High
                    Performer".
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </div>

          <div className="about__education">
            <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
              <div className="about__experience__title">education</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
              <div className="experience1">
                <div className="section1">
                  <CircleOutlinedIcon className="section__circle" />
                  <AnimationOnScroll
                    animateIn="animate__bounceInUp"
                    animateOnce
                  >
                    <div className="vl"></div>
                  </AnimationOnScroll>
                </div>
                <div className="section2">
                  <div className="about__exp__title">
                    Stevens Institute Of Technology
                  </div>
                  <div className="about__exp__project">
                    Master of Science In Computer Science
                  </div>
                  <div className="about__exp__timeline">
                    August 2021 - May 2023
                  </div>
                  <div className="about__exp__desc">
                    Specializing in Web Development. Pursuing my 2nd Semester
                    Studies. Completed Courses: Datastructures, DBMS, Web
                    Development-I, Web Development-II, Algorithms, Principles of
                    Computing. GPA : 3.89/4
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
              <div className="experience2">
                <div className="section1">
                  <CircleOutlinedIcon className="section__circle" />
                </div>
                <div className="section2">
                  <div className="about__exp__title">
                    Mar Baselios College Of Engineering And Technology
                  </div>
                  <div className="about__exp__project">
                    Bachelor Of Technology in Electrical and Electronics
                    Engineering
                  </div>
                  <div className="about__exp__timeline">
                    June 2020 - August 2021
                  </div>
                  <div className="about__exp__desc">
                    Completed Several programming projects.
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
