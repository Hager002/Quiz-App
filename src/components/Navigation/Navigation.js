import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar" variant="tabs" href="/home">
          <Nav.Item className="navItem">
            <Nav.Link className="nav1" href="/home">
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="navItem">
            <Nav.Link className="nav2" href="/verlauf">
              Verlauf
            </Nav.Link>
          </Nav.Item>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
