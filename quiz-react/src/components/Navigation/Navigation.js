import React from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import "./Navigation.css"; 
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

export default function Navigation({ reset }) {
  return (
    <div>
      <Navbar className="navbar" variant="tabs">
        <Nav.Item className="nav_item"> 
        <Link className="nav_item_1" to="/"><SportsEsportsIcon/> Quiz </Link>
        </Nav.Item>

        <Nav.Item className="nav_item">
        <Link className="nav_item_2" to="/verlauf"> Verlauf </Link>
        </Nav.Item>
      </Navbar>
    </div>
  );
}
