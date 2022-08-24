import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animals: this.props.animalData,
            clickCounter: ""
        }
    }
   
    handleClick = (id) => {
        this.setState({ clickCounter: this.state.clickCounter + "❤️" })
    }
    modalClick = () => {
        this.props.showModal(this.props.animalData);
    }
  
    

    render() {
        return (
            
            
            <div key={this.props.animalData._id}>
                <Placeholder xs={12} bg="primary" />
                <Card >
                    <Card.Img variant="top" src={this.props.animalData.image_url} alt={this.props.animalData.keyword} onClick={this.modalClick}  />
                    <Card.Body>
                        <Card.Title>{this.props.animalData.title}</Card.Title>
                        <Card.Text>
                            {this.props.animalData.description}

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {/* <Button variant="secondary" size="sm" value={this.props.animalData._id} onClick={this.modalClick}>
                            Expand
                        </Button> */}
                        <span> Number of Horns: {this.props.animalData.horns}</span>
                        <br/>
                        <Button variant="danger" size="sm" onClick={this.handleClick}>
                            Vote "out of 5" :{this.state.clickCounter}   
                        </Button>{' '}
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default HornedBeast;