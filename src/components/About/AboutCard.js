import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="red">Raoui Rahmeni </span>
            from <span className="red"> Tunisia.</span>
            <br />I am a motivated young developer looking to make his mark on
            this beautiful earth.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> camping
            </li>
          </ul>

          <p
            className="blockquote-footer"
            style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}
          >
            "If you're not making fun, You're making a tasteless bun"{" "}
          </p>
          <footer className="blockquote-footer">RaouiRahmei</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
