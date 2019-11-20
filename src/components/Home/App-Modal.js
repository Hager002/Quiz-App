import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export class AppModal extends Component {
  

  render() {
    return (

      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Quiz-Game Instructions
      </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">



            
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}