import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Raoui_Rahmeni_Resume_Ang.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="intern as associate HIR [ReBootKamp (RBK) Tunisia]"
              date="10/2021 - 12/2021"
              content={[
                "Understand the principles of extreme Learning and use Socratic dialog tO guide discovery.",
                "Work on sprints and repos on github with several technologies like React and Nodejs etc.",
                "Managed time-sensitive updates, including content changes and database upgrades.",
                "Beeing student-facing member of the instructual team -- building culture, coaching success behaviors, and talking code",
                "Planned, wrote, and debugged web applications and sprints with complete accuracy.",
                "Ensured students are technically prepared for a successful job search and career in the software industry."
              ]}
            />
            <h3 className="resume-title">PROFESSIONAL PROJECTS</h3>
            <Resumecontent
              title="Car-Yeah [Team of Four | Role: Developer | Scrum Methodology.]"
              content={[
                "Create registration/login components with secure authentication system using the following technologies JWT and Bcrypt to hash passwords and secure users informations.",
                "Design both components using bootstrap and adding toggle between them to making the UI better and according to the details fixed in trello.",
                "Build the admin component of the project which is the management part where you have control over deleting users or write them emails using nodemailer for that."
              ]}
            />
            <br />
            <Resumecontent
              title="Story Shore [A Solo Project]"
              content={[
                "Create Register/Login components with secure authentication system using bcrypt to hash user credational and adding a toggle functionality to make sure of a smooth UI.",
                "Create user profile where they can edit personal information like username, adresse email, profile picture and more.",
                "Build an interactive and responsive components of the app (Profile/Write/Contact Us/Categories) where you can toggle between them in a navigation bar..",
                "Add or write a blog in the Write page and publish it it will be rendered automatically in the Homepage on top. you can read different blogs and search by name or category."
              ]}
            />
          </Col>
          {/* <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="IMSC MATHS AND COMPUTING [BIT Mesra, Ranchi] "
              date="2018 - Present"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />

            <h3 className="resume-title">Publications</h3>
            <Resumecontent
              title=""
              content={[
                "Article entitled An Overlapping Sliding Window and Combined Feature based Emotion Recognition System for EEG Signals publised in Emerald Publication;10.1108/ACI-05-2021-0130"
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019"
              ]}
            />
          </Col> */}
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
