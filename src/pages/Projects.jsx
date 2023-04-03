import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.jpg";
import project from "../assets/projects/Picture1.png";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.jpg";
import kickstart from "../assets/projects/kickstart.png";
import ecomm from "../assets/projects/ecom.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Sorting-Visualizer"
              description="This project is a Web Visualization tool for sorting algorithms."
              ghLink="https://github.com/prince9318/Sorting_Visualizer_Algorithms-"
              demoLink="https://prince9318.github.io/Sorting_Visualizer_Algorithms-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="-Moviepedia-"
              description="Moviepedia is a movie recommendation platform that can recommend movie as well as can tell the movie details ."
              ghLink="https://github.com/prince9318/MoviePedia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomm}
              isBlog={false}
              title="E-Commerce Website"
              description=""
              ghLink="https://github.com/prince9318/E-commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Hotel-Management"
              description=""              
              ghLink="https://github.com/prince9318/Hotel_project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Web-Site Development"
              description=""
              ghLink="https://github.com/prince9318/prince9318"
              demoLink="https://github.com/prince9318"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="PortFolio"
              description=""
              ghLink="https://github.com/prince9318/portfolio"
              demoLink = "https://prince9318.github.io/project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects;