import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./Json.json";
import {Row} from "react-bootstrap";


let info = data.map(element => 
    <HornedBeast 
        id = {element._id}
        title = {element.title}
        img = {element.image_url}
        des = {element.description}
    /> 
);

class Main extends React.Component {
    render(){
        return(
          <Row xs={2} md={3} className="g-4">
            {info}
          </Row>
        )
    }
}

export default Main;