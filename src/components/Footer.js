import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


class Footer extends React.Component {
  render(){
    return(
    <div>
      
      
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      
        <Navbar.Brand href="#home">&copy;Mohannad Ghbahneh</Navbar.Brand>
        
      
    </Navbar>
    </div>
    )
  }
}

export default Footer;