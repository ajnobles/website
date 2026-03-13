import { Container, Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/esm/Accordion";
//import Container from "react-bootstrap/esm/Container";

const Education = (props: educationProps) => {
    const courses = props.RelevantCourseWork.join(',');
    return (
        <Accordion.Item className="" eventKey={props.EventKey}>
            <Accordion.Header>                
                <Container fluid>
                    <Col>
                        <Row>
                            <h5 className="">{props.SchoolName}</h5>
                        </Row>
                        <Row><div>{props.Degree}, {props.Discipline}</div></Row>
                        <Row><div>{props.EndMonthYear}</div></Row>
                    </Col>
                </Container>
            </Accordion.Header>   
            <Accordion.Body className="_textMaxWidth">
                <div>{props.SchoolLocation}</div>
                <div><b>GPA:</b> {props.GPA}</div>
                <div><b>Relevant Coursework:</b> {courses}</div>
            </Accordion.Body>       
        </Accordion.Item>
    )
};

interface educationProps {
    SchoolName: string,
    SchoolLocation: string,
    Degree: string,
    Discipline: string,
    RelevantCourseWork: string[],
    GPA: number,
    StartMonthYear: string,
    EndMonthYear: string,
    EventKey: string,
}

export default Education;