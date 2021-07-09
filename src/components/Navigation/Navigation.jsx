import React, { useState } from "react";
import "./Navigation.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationData from "./NavigationData";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navigation = () => {
  const [navigationData, setNavigationData] = useState(NavigationData);

  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="navigationLogoTitle" as={Link} to="/">
          SSC Math Solution
        </Navbar.Brand>
        <Navbar.Toggle style={{border:"none"}} aria-controls="basic-navbar-nav" >

        <AiOutlineMenuUnfold className="toggle-icon" />
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navigationData.map((iteam) =>
              iteam.dropDown ? (
                <NavDropdown
                  className="navigation-manue"
                  title={iteam.title}
                  id="basic-nav-dropdown"
                >
                  {iteam?.dropDown?.map((x) => (
                    <NavDropdown.Item as={Link} to={x.link}>
                      {x.chaptarNumber}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  className="navigation-manue"
                  as={Link}
                  to={iteam.link}
                >
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
