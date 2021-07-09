import React from "react";
import "./Navigation.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  const NavigationData = [
    {
      title: "First",
      dropDown: ["1.1", "1.2"],
    },
    {
      title: "Second",
     
    },
    {
      title: "Third",
      dropDown: ["3.1", "3.2"],
    },
    {
      title: "Fourth",
    },
    {
        title: "Five",
        dropDown: ["5.1", "5.2","5.3", "5.4", "5.6", "5.7"],
      },
  ];
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="navigationLogoTitle" as={Link} to="/">SSC Math Solution </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {NavigationData.map((iteam) =>
              iteam.dropDown ? (
                <NavDropdown title={iteam.title} id="basic-nav-dropdown">
                  {iteam?.dropDown?.map((x) => (
                    <NavDropdown.Item as={Link} to="/">
                      {x}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to="/home">
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
