import Accordion from "react-bootstrap/esm/Accordion";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image"
import Row from "react-bootstrap/esm/Row";

import { type IProject } from './data';

const Project = (props: ProjectProps) => {
    const tech = props.Project.Technologies.join(', ');

    return (        
        <Accordion.Item className="" eventKey={props.EventKey}>
            <Accordion.Header>
                <h5 className="_nowrap">{props.Project.Name}</h5>
            </Accordion.Header>   
            <Accordion.Body className="">
                <Container style={{maxWidth: "700px" }}>
                    <Row>
                        <Col>
                            <Image className="_projectImage" src={props.Project.ImageLocation} />
                        </Col>
                        <Col className="my-auto">
                            <div>{props.Project.Description}</div>
                            <div><i>Programming languages/Technologies used: {tech}</i></div>
                        </Col>
                    </Row>
                </Container>
            </Accordion.Body>       
        </Accordion.Item>
    )
}

interface ProjectProps {
    Project: IProject;
    EventKey: string,
}

export default Project;