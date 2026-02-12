import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/esm/Navbar"

const Navigation = () => {
    return (
        <Navbar 
            expand="lg" 
            sticky="top" 
            bg="dark"
            variant="dark"
        >
            <Container className="text-uppercase">
                <Navbar.Brand href="#home">Allen Nobles</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;