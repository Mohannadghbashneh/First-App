
import React from "react";
import Placeholder from 'react-bootstrap/Placeholder';

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import {Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: "",
    };
  }

  voting = () => {
    this.setState({
      votes: this.state.votes + "❤️",
    });
    
    
  };
  seeMe = () => {
    this.props.showModal(this.props.title);
  }

  render() {
    return (
     
      <Col>
            <Placeholder xs={12} bg="primary" />

    <Card style={{ width: "18rem", height: "600px"  }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img
            variant="top"
            src={this.props.img}
             onClick={this.seeMe}
              

         />
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>Votes: {this.state.votes}</Card.Text>
          <Button variant="danger" onClick={this.voting} >Vote for me!</Button>

        </Card.Body>
      </Card>
      </Col>
    );
  }
}

export default HornedBeast;