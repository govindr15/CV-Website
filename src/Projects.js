import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
        <div className="project__title">Projects</div>
      </AnimationOnScroll>
      <div className="projects__sections">
        <div className="projects__col">
          <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
            <a href="https://fb-clone-7a27f.web.app/">
              <div className="projects__hanger">
                <div className="projects__img__box">
                  <img src="/FbClone.png" alt="" className="projects__img" />
                </div>
                <div className="project__experience__title">Facebook-Clone</div>
              </div>
            </a>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
            <a href="https://whats-appclone-68aeb.web.app/">
              <div className="projects__hanger">
                <div className="projects__img__box">
                  <img
                    src="/WhatsappClone.png"
                    alt=""
                    className="projects__img"
                  />
                </div>
                <div className="project2__experience__title">
                  Whatsapp-Clone
                </div>
              </div>
            </a>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
            <a href="">
              <div className="projects__hanger">
                <div className="projects__img__box">
                  <img
                    src="/AmazonClone.png"
                    alt=""
                    className="projects__img"
                  />
                </div>
                <div className="project3__experience__title">Amazon-Clone</div>
              </div>
            </a>
          </AnimationOnScroll>
        </div>

        <div className="projects__col">
          <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
            <a href="https://personal-dict-vocab-eval.herokuapp.com/">
              <div className="projects__hanger">
                <div className="projects__img__box">
                  <img src="/PDVE.png" alt="" className="projects__img" />
                </div>
                <div className="project4__experience__title">
                  Personal Dict & Vocab
                </div>
              </div>
            </a>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
            <a href="https://insta-clone-d3ac0.web.app/">
              <div className="projects__hanger">
                <div className="projects__img__box">
                  <img
                    src="/InstagramClone.png"
                    alt=""
                    className="projects__img"
                  />
                </div>
                <div className="project5__experience__title">
                  Instagram-Clone
                </div>
              </div>
            </a>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
            <a href="">
              <div className="projects__hanger">
                <div className="projects__img__box">
                  <img src="/UberClone.jpeg" alt="" className="projects__img" />
                </div>
                <div className="project6__experience__title">Uber-Clone</div>
              </div>
            </a>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default Projects;
