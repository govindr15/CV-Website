import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/govind-r-nair-05156b122/">
            <img src="/linkedin_img.svg" className="linkedInImg" alt="" />
          </a>
          <a href="https://github.com/govindr15">
            <img src="/github_img.svg" className="githubImg" alt="" />
          </a>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Footer;
