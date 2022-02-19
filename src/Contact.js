import React, { useState } from "react";
import "./Contact.css";
import { send } from "emailjs-com";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Contact() {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_v6qazc7",
      "template_mezz40r",
      toSend,
      "user_QiNJX75wnCAChv9iheJat"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const changePlaceHolderName = () => {
    document.getElementsByClassName("contact__label__name")[0].style.transform =
      "scale(50%)";
    document.getElementsByClassName("contact__label__name")[0].style.bottom =
      "4vh";
  };

  const changePlaceHolderEmail = () => {
    document.getElementsByClassName(
      "contact__label__email"
    )[0].style.transform = "scale(50%)";
    document.getElementsByClassName("contact__label__email")[0].style.bottom =
      "4vh";
  };

  const changePlaceHolderMessage = () => {
    document.getElementsByClassName(
      "contact__label__message"
    )[0].style.transform = "scale(50%)";
    document.getElementsByClassName("contact__label__message")[0].style.top =
      "-4vh";
  };
  return (
    <div className="contact">
      <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
        <div className="contact__title">CONTACT</div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
        <div className="contact__desc">Send me a message!</div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce>
        <div className="contact__main">
          <form onSubmit={onSubmit}>
            <div className="contact__form">
              <div className="contact__section1">
                <div className="contact__name__box">
                  <label
                    htmlFor="contact__name"
                    className="contact__label__name"
                  >
                    name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="contact__name"
                    value={toSend.name}
                    onChange={handleChange}
                    onClick={changePlaceHolderName}
                  />
                </div>
                <div className="contact__email__box">
                  <label
                    htmlFor="contact__email"
                    className="contact__label__email"
                  >
                    email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="contact__email"
                    value={toSend.email}
                    onChange={handleChange}
                    onClick={changePlaceHolderEmail}
                  />
                </div>
              </div>
              <div className="contact__section2">
                <div className="contact__message__box">
                  <label
                    htmlFor="contact__message"
                    className="contact__label__message"
                  >
                    message
                  </label>
                  <textarea
                    name="message"
                    id="contact__message"
                    value={toSend.message}
                    onChange={handleChange}
                    onClick={changePlaceHolderMessage}
                  />
                </div>
              </div>
              <div className="contact__btn__box">
                <button id="contact__btn" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Contact;
