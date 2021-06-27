import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import findthebrew from "../../assets/images/findthebrew.png";
import fantasysport from "../../assets/images/fantasysport.png";
import weatherdash from "../../assets/images/weatherdash.png";
import jschallenge from "../../assets/images/jschallenge.png"
import dayschedule from "../../assets/images/scheduler.png"

export class Work extends Component {
  render() {
    return (
      <section className="my-work" id="my-work">
        <h1>My Work.</h1>

        <Carousel style={{width: "80%", textAlign:"center", margin: "0 auto"}}>
          <Carousel.Item interval={5000}>
          <a href="https://jshmtchll.github.io/Find_The_Brew/"><img
              className="d-block w-100"
              src={findthebrew}
              alt="First slide"
            /></a>
            <Carousel.Caption>
              <h3 className="Carousel-Title">
              <b>Find The Brew</b>
              </h3>
              <p className="Carousel-Title">
                <b>An app to find local breweries in your area</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <a href="https://fantasy-team-builder.herokuapp.com/"><img
              className="d-block w-100"
              src={fantasysport}
              alt="Second slide"
            /></a>
            <Carousel.Caption>
              <h3 className="Carousel-Title">
                <b>Fantasy Team Builder</b>
              </h3>
              <p className="Carousel-Title">
                <b>An app using CRUD to create an fantasy sports team</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <a href="https://jshmtchll.github.io/weather-dash/"><img
              className="d-block w-100"
              src={weatherdash}
              alt="weather dash weather app"
            /></a>
            <Carousel.Caption>
              <h3 className="Carousel-Title">
                <b>Weather Dash</b>
              </h3>
              <p className="Carousel-Title">
                <b>
                  A simple weather dashboard to find local weather in your city
                </b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <a href="https://jshmtchll.github.io/quiz-game/"><img
              className="d-block w-100"
              src={jschallenge}
              alt="weather dash weather app"
            /></a>
            <Carousel.Caption>
              <h3 className="Carousel-Title">
                <b>Javascript Challenge</b>
              </h3>
              <p className="Carousel-Title">
                <b>
                This is a JavaScript quiz game presented in a multiple choice question format. It consists of a landing page which prompts the user to start the game or view the high scores list, and when the game begins they must answer all the questions within the time limit, which changes dynamically based on how many questions are in the set.
                </b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <a href="https://jshmtchll.github.io/day-scheduler/"><img
              className="d-block w-100"
              src={dayschedule}
              alt="day scheduler"
            /></a>
            <Carousel.Caption>
              <h3 className="Carousel-Title">
                <b>Day Scheduler</b>
              </h3>
              <p className="Carousel-Title">
                <b>
                A simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery and Moment.js.</b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    );
  }
}

export default Work;
