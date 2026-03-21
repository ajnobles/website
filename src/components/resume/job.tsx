import Accordion from "react-bootstrap/esm/Accordion";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const Job = (props: JobProps) => {
    
    let endMonth = props.EndMonthYear ? props.EndMonthYear : "Present";
    const hasDetails = (props.Details.length > 0)

    return (
        <Accordion.Item className="" eventKey={props.EventKey}>
            <Accordion.Header>
                <Container fluid>
                    <Col>
                        <Row>
                            <h5 className="">{props.Company} - {props.JobTitle}</h5>
                        </Row>
                        <Row><div>{props.CompanyLocation}</div></Row>
                        <Row><div>{props.StartMonthYear} - {endMonth}</div></Row>
                    </Col>
                </Container>
            </Accordion.Header>   
            <Accordion.Body className="_textMaxWidth">
            {hasDetails ? 
                <ul>
                    {props.Details.map((detail: string) => {
                        return <li>{detail}</li>
                    })}
            </ul> : <></>}
            </Accordion.Body>       
        </Accordion.Item>
        );
}

interface JobProps {
    JobTitle: string,
    Company: string,
    CompanyLocation: string,
    StartMonthYear: string,
    EndMonthYear?: string,
    EventKey: string,
    Details: string[]
}

export default Job;