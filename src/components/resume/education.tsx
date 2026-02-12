import Container from "react-bootstrap/esm/Container";

const Education = (props: educationProps) => {
    const courses = props.RelevantCourseWork.join(',');
    return (
        <Container fluid>
            <h5>{props.SchoolName} - {props.SchoolLocation}</h5>
            <ul>
                <li>{props.StartMonthYear} - {props.EndMonthYear}</li>
                <li>{props.Degree}, {props.Discipline}, GPA: {props.GPA}</li>
                <li>Relevant Coursework: {courses}</li>
            </ul>
        </Container>
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
}

export default Education;