import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';


class Navigation extends Component {
    render() {

        return (

            <div>
                <Navbar variant="tabs" defaultActiveKey="/home" href="/home">
                    {/* <Nav.Item>
                        <Nav.Link href="/">
                            Login</Nav.Link>
                    </Nav.Item> */}

                    <Nav.Item>
                        <Nav.Link eventKey="/home" href="/home">
                            Home</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="/verlauf" href="/verlauf">
                            Verlauf</Nav.Link>
                    </Nav.Item>
                </Navbar>
            </div>

        )
    }
}

export default Navigation; 