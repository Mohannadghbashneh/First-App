import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



class Header extends React.Component {
  
  render(){
    return(
    <div>
    
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="#home">WELCOM ALL 💌</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="OUR SOCIAL MAEDIA" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">FACEBOOK 👤</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">INSTAGRAM 📷</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SNAPCHAT 📷</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
          </Nav>
         
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
     
    
   

    </div>
    )
  }
}

export default Header;