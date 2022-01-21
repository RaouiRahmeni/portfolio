import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import newway from "../../Assets/Projects/newway.JPG";
import storyshore from "../../Assets/Projects/storyshore.JPG";
import caryaah from "../../Assets/Projects/caryaah.JPG";
import ipicshare from "../../Assets/Projects/ipicshare.JPG";
import funvibes from "../../Assets/Projects/funvibes.JPG";

import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="red">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>these are some projects i worked on</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storyshore}
              isBlog={false}
              title="Story Shore"
              description="For bloggers this is the place to share your weekend story. The idea behind this project is to bring experiences from your summer to our platform. Good vibes only where people read to have fun and get inspired where to go next holiday.  "
              link="https://github.com/RaouiRahmeni/storyshore"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={caryaah}
              isBlog={false}
              title="Car Yaah"
              description="Renting a car never been easier with Car Yeah with the click of a button you can choose a car from the already list of post cards indicated cars available in the date you already put and payment online with full safety transaction that Car Yaah Team assures."
              link="https://github.com/RaouiRahmeni/CarYaah"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ipicshare}
              isBlog={false}
              title="iPicShare"
              description="a personal pictures library  where you can add a picture or delete it. also search by name i used cloudinary and multer with this project to save my pictures in my database."
              link="https://github.com/RaouiRahmeni/ipicshare"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newway}
              isBlog={false}
              title="NewWay"
              description="This is a renting site for people find houses, apartments, cabinets or any type of housing service. NewWay work on making renting accecbale to everyone and as easy as it sounds where people can search for what they want by name or price or area also hosts can put there rooms or services for rent and gain profit."
              link="https://github.com/RaouiRahmeni/renting"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={funvibes}
              isBlog={false}
              title="Fun Vibes"
              description='i built this arcade like site with raw html, javascript and css as my first project ever. it contains two games "guess the number under 100" and "guess my 3 letter word" where i used a basic algorithm and i had fun with the design.'
              link="https://github.com/RaouiRahmeni/game"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
