import Job from "./job";
import Education from "./education";
import { Col, Row } from "react-bootstrap";

const Resume = () => {

    const OSUcourses = [ 
        "Introduction to Computer Science I & II", 
        "Computer Architecture and Assembly", 
        "Web Development", 
        "Discrete Structures in Computer Science", 
        "Data Structures", 
        "Analysis of Algorithms", 
        "Introduction to Databases", 
        "Operating Systems I, Software Engineering I & II", 
        "Introduction to Parallel Programming"
    ];

    const USMcourses = [
        "Introduction to Computing", 
        "MIDI Concepts & Programming"
    ];
    
    return (
        <>
            <Row id="resume">
                <Col>
                <h2>Experience</h2>
                <hr />
                <Job 
                    JobTitle="Estimator"
                    Company="Elite Mechanical Systems"
                    CompanyLocation="Mobile, AL"
                    StartMonthYear="March 2017"
                    EndMonthYear="September 2018"
                />
                <Job
                    JobTitle="CAD Technician/Estimator"
                    Company="Solution Mechanical"
                    CompanyLocation="Mobile, AL"
                    StartMonthYear="January 2012"
                    EndMonthYear="February 2017"
                />
                <Job
                    JobTitle="Worship Leader"
                    Company="Engulf United Methodist Church"
                    CompanyLocation="Gulf Shores, AL"
                    StartMonthYear="November 2010"
                    EndMonthYear="April 2012"
                />
                <Job
                    JobTitle="CAD Technician"
                    Company="Batchelor's Mechanical Contractors"
                    CompanyLocation="Loxley, AL"
                    StartMonthYear="September 2008"
                    EndMonthYear="December 2011"
                />
                </Col>
            </Row>

            <Row>
                <h2>Ediucation</h2>
                <Education
                    SchoolName="Oregon State University"
                    SchoolLocation="Corvallis, OR"
                    Degree="Bachelor of Science"
                    Discipline="Computer Science"
                    GPA={3.90}
                    StartMonthYear="January 2017"
                    EndMonthYear="December 2018"
                    RelevantCourseWork={OSUcourses}
                />
                <Education
                    SchoolName="University of Southern Mississippi"
                    SchoolLocation="Hattiesburg, MS"
                    Degree="Bachelor of Music"
                    Discipline="Music Industry"
                    GPA={3.31}
                    StartMonthYear="August 2000"
                    EndMonthYear="May 2006"
                    RelevantCourseWork={USMcourses}
                />
            </Row>
        </>
    )
};

export default Resume;