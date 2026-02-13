import { Image, Container } from "react-bootstrap";
import './header.css'
import profileImg from '../../assets/Profile-Pic.jpg'

const Header = () => {
    return (
        <Container className="text-center">
            <Image 
                className="img-profile" 
                roundedCircle 
                src={profileImg} />
            <h1 id="head-title" className="_headerTitle">Allen Nobles</h1>
            <hr className="star-light" />
            <h3 id="head-subtitle" className="_paddingTop10 _fontLato">Computer Science - Oregon State University</h3>
        </Container>
    )
};

export default Header;