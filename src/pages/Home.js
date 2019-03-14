import React, { Component } from "react";

import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import projects from "../projects";

class DisplayCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.project = props.project;
  }
  render() {
    return (
      <Card style={{ width: "18rem", margin: "1rem" }}>
        <Card.Img
          variant="top"
          src={this.project.img}
          style={{ width: "18rem", height: "10rem" }}
          title={this.project.attribution}
        />
        <Card.Body>
          <Card.Title>{this.project.title}</Card.Title>
          <Card.Text>{this.project.descriptionShort}</Card.Text>
          <a
            href={this.project.url}
            target="_blank"
            style={{ color: "white", float: "right" }}
          >
            Learn More →
          </a>
        </Card.Body>
      </Card>
    );
  }
}

const projectCards = projects.map(project => {
  return <DisplayCard project={project} />;
});

export default () => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {projectCards}
    </div>
  );
};
