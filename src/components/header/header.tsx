import { Image, Container } from "react-bootstrap";
import './header.css'

const Header = () => {
    return (
        <Container className="text-center">
            <Image 
                className="img-profile" 
                roundedCircle 
                src="src\assets\Profile-Pic.jpg" />
            <h1 id="head-title" className="_headerTitle">Allen Nobles</h1>
            <hr className="star-light" />
            <h3 id="head-subtitle" className="_paddingTop10 _fontLato">Computer Science - Oregon State University</h3>
        </Container>
    )
};

export default Header;