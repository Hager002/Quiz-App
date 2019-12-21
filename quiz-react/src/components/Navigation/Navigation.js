import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./navigation.scss"; 

export default function Navigation({ reset }) {
  return (
    <div>
      <Navbar className="navbar" variant="tabs" href="/home">
        <Nav.Item className="nav_item">
          <Nav.Link className="nav_item_1" href="/home">
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="nav_item">
          <Nav.Link className="nav_item_2" href="/verlauf">
            Verlauf
          </Nav.Link>
        </Nav.Item>
      </Navbar>
    </div>
  );
}
