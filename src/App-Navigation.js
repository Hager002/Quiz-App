import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';


class Navigation extends Component {
    render() {

        return (

            <div>
                <Navbar className="nav123" variant="tabs" href="/home">

                    <Nav.Item >
                        <Nav.Link className="nav1" href="/home">
                            Home</Nav.Link>
                    </Nav.Item>

                    <Nav.Item > 
                        <Nav.Link className="nav2" href="/verlauf">
                            Verlauf</Nav.Link>
                    </Nav.Item>
                    
                </Navbar>
            </div>

        )
    }
}

export default Navigation; 