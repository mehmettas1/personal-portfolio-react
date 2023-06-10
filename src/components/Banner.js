import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";


export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center ">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi I'm webcoded`} <span className="wrap">web Developer</span>{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed
              quas exercitationem a omnis aut vero perspiciatis in tempore
              veritatis?
            </p>
            <button onClick={() => console.log("tıklandı")}>baĞLANALI M <ArrowRightCircle size={25} /> </button>
          </Col>
          <Col xs={12} md={6} xl={7}>
          <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
