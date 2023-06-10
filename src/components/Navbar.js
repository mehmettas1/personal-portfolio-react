import { useState } from "react";
import {Navbar,Container} from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
  return (
   
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#projects">project</Nav.Link>

          </Nav>
          <span className="navbar-taxt">
            <div className="social-icom">
                <a href="#" className="">
                    <img src={} alt="" />
                </a>

                <a href="#" className="">
                    <img src={} alt="" />
                </a>
                <a href="#" className="">
                    <img src={} alt="" />
                </a>
            </div>
            <button className="vvd" onClick={()=>console.log('connect')}>
                <span>Lets connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}
