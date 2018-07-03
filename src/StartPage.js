import React from 'react';
import {Alert,Modal, Button} from 'react-bootstrap';

class Start extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return (
      <div className="row vertical-align">
          <input className="form-control" onChange={this.props.change} placeholder="Your Username..."/>
          <input className="form-control" onChange={this.props.change2} placeholder="Password" type="password"/>
          <button className="btn btn-primary" onClick={this.props.request}>Submit</button>


          <div  className={"static-modal " + this.props.status}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>Wrong Username or Password!</Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    );
  }
}

export default Start;
