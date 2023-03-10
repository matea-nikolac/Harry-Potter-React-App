// Images
import logo from '../images/logo.png'

// React Router Dom Elements
import { Link } from 'react-router-dom'

// React Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const PageNavbar = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          <img src={logo} alt="logo" className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="site-navigation" />
        <Navbar.Collapse id="site-navigation" className='justify-content-end'>
          <Nav>
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link to="/characters" as={Link}>Characters</Nav.Link>
            <Nav.Link to="/movies" as={Link}>Movies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavbar