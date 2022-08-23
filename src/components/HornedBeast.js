import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import {Col} from "react-bootstrap";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
    };
  }

  vote = () => {
    this.setState({
      val: this.state.val + "❤️",
    });
  };

  render() {
    return (
      <Col>
      <Card style={{ width: "18rem", height: "500px"  }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img
    
            src={this.props.img}
            onClick={this.vote}
          />
          <Card.Text>{this.props.des}</Card.Text>
          <Card.Text>Votes: {this.state.val}</Card.Text>
        </Card.Body>
      </Card>
      </Col>
    );
  }
}

export default HornedBeast;