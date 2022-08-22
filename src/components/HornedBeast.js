import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import data from "./Json.json";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
        val:''
    }
}

incrementNum = () => {
    this.setState({
       val: this.state.val+ "❤️"
    })
}
  render() {
    return (
      <Row className="row" >
        <div  style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 15 }}>
          {data.map((jsonObject) => {
            return (
              
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={jsonObject.image_url} onClick={this.incrementNum}/>
                  <Card.Body>
                    <Card.Title>{jsonObject.title}</Card.Title>
                    <Card.Text>{jsonObject.description}</Card.Text>
                    <Card.Text>
                       Votes: {this.state.val}
                    </Card.Text>
                  </Card.Body>
                </Card>
              
            );
          })}
        </div>
      </Row>
    );
  }
}

export default HornedBeast;