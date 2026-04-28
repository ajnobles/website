import Accordion from "react-bootstrap/esm/Accordion";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import { type IJob } from "./jobData";

const Job = (props: JobProps) => {
    let endMonth = props.Job.EndMonthYear ? props.Job.EndMonthYear : "Present";    
    let hasDetails = (props.Job.Details?.length > 0);

    const noJobDescription = <div>See <a href="http://www.linkedin.com/in/allenjnobles" target="_blank">LinkedIn</a> for job description</div>;

    return (
        <Accordion.Item eventKey={props.EventKey}>
            <Accordion.Header>
                <Container fluid>
                    <Col>
                        <Row>
                            <h5>{props.Job.Company} - {props.Job.JobTitle}</h5>
                        </Row>
                        <Row><div>{props.Job.CompanyLocation}</div></Row>
                        <Row><div>{props.Job.StartMonthYear} - {endMonth}</div></Row>
                    </Col>
                </Container>
            </Accordion.Header>   
            <Accordion.Body className="_textMaxWidth">
            {hasDetails ? 
                <ul>
                    {props.Job.Details.map((detail: string) => {
                        if (detail.length < 1) {return <>{noJobDescription}</>}
                        return <li>{detail}</li>
                    })}
                </ul> : <>{noJobDescription}</>}
            </Accordion.Body>       
        </Accordion.Item>
        );
}

interface JobProps {
    Job: IJob,
    EventKey: string,
}

export default Job;
