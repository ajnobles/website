import Accordion from "react-bootstrap/esm/Accordion";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import type { IEducation } from "./educationData";

const Education = (props: educationProps) => {
    const courses = props.Education.RelevantCourseWork.join(',');

    return (
        <Accordion.Item className="" eventKey={props.EventKey}>
            <Accordion.Header>                
                <Container fluid>
                    <Col>
                        <Row>
                            <h5 className="">{props.Education.SchoolName}</h5>
                        </Row>
                        <Row><div>{props.Education.Degree}, {props.Education.Discipline}</div></Row>
                        <Row><div>{props.Education.EndMonthYear}</div></Row>
                    </Col>
                </Container>
            </Accordion.Header>   
            <Accordion.Body className="_textMaxWidth">
                <div>{props.Education.SchoolLocation}</div>
                <div><b>GPA:</b> {props.Education.GPA}</div>
                <div><b>Relevant Coursework:</b> {courses}</div>
            </Accordion.Body>       
        </Accordion.Item>
    )
};

interface educationProps {
    Education: IEducation
    EventKey: string,
}

export default Education;