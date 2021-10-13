import React from "react";
import {
  BrowserRouter as Router,
//   Switch,
//   Route,
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar className="px-3" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand href="#home">Muiasar Al Ani</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav " className="float-to-right">
                <Nav className="mr-auto ">
                  <Nav.Link className={currentPage === 'Home' ? 'active active-page-link' : 'active'} href="/"  onClick={() => handlePageChange('Home')}>
                    Home
                  </Nav.Link>
                  <Nav.Link className="active" href="/work">
                    Work
                  </Nav.Link>
                  <Nav.Link
                    className="active"
                    href="https://www.linkedin.com/in/muiasar-al-ani-71476420b/"
                    target="_blank"
                  >
                    LinkedIn
                  </Nav.Link>
                  <Nav.Link className="active" href="/about-me">
                    About Me
                  </Nav.Link>
                  <Nav.Link className="active" href="/contact-me">
                    Contact Me
                  </Nav.Link>
                  <Nav.Link className="active" href="/assets/images/Muiasar-Al-Ani-Resume.pdf" download>
                  Download Resume
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <br />
            {/* <Switch>
              <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
                    <Route path="/contact-us">
                        <ContactUs />
                    </Route>
            </Switch> */}
          </Router>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
