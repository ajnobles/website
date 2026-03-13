import { Image, Container, Col, Row } from "react-bootstrap";
import './header.css'
import profileImg from '../../assets/Profile-Pic.jpg'

const Header = () => {
    return (
        <Container className="">
        <Row className="text-center">
            <Col className="">
             <Image 
               className="img-profile" 
                 roundedCircle 
                 src={profileImg} />
            </Col>
            <Col className="my-auto">
                <h1 id="head-title" className="_headerTitle">Allen Nobles</h1>
                <h3 id="head-subtitle" className="_paddingTop10 _fontLato">
                    <div className="text-nowrap">Computer Science</div>
                    <div className="text-nowrap">Oregon State University</div>
                </h3>
            </Col>
        </Row>
        </Container>
    )
};

export default Header;