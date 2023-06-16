import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/flowers.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/movieapp.png";
import projImg5 from "../assets/img/weather-app.png";
import projImg6 from "../assets/img/book-store1.png";
import projImg7 from "../assets/img/recipe-app.png";
import projImg8 from "../assets/img/spider.png";
import projImg9 from "../assets/img/stop.png";
import projImg10 from "../assets/img/calculater.png";
import projImg11 from "../assets/img/flowers.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "cooked to order",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Flower order",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "E-commerce project",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Movieapp project",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Weather app",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Book Store",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];
  const projects1 = [
    {
      title: "cooked to order",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Flower order",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "E-commerce project",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "Movieapp project",
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title: "Weather app",
      description: "Design & Development",
      imgUrl: projImg11,
    },
    {
      title: "Book Store",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                        {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                     
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
