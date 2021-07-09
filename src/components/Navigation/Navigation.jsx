import React, { useState } from "react";
import "./Navigation.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationData from "./NavigationData";

const Navigation = () => {
 const [navigationData, setNavigationData] = useState(NavigationData);


  return (
    <>
      <Navbar collapseOnSelect  bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="navigationLogoTitle" as={Link} to="/">SSC Math Solution </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navigationData.map((iteam) =>
              iteam.dropDown ? (
                <NavDropdown className="navigation-manue" title={iteam.title} id="basic-nav-dropdown">
                  {iteam?.dropDown?.map((x) => (
                    <NavDropdown.Item as={Link} to="/">
                      {x}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link className="navigation-manue" as={Link} to="/home">
                  {iteam.title}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
