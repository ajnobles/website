import Job from "./job";
import Education from "./education";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import './resume.css';
import SectionHeader from "../sectionHeader/section_header";
import SectionSubHeader from "../sectionHeader/section_subheader";

//import resume_pdf from '../../assets/projects/AllenNobles_Resume.pdf'
const ResumePDF = 'AllenNobles_Resume.pdf'
const ResumePath = '/src/assets/projects/'

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

    const VineDescription = [
        'Scheduled a team of approximately fifteen musicians and vocalists for a Sunday morning church service.',
        'Performed auditions for prospective music team members and provided actionable feedback for growth and development.',
        'Coordinated equipment needed with the audio/visual team to ensure rehearsal and church services occur on time.',
    ];

    const EpicDescription = [
        'Executed migration of legacy applications, resulting in improved compatibility with modern tools and technologies, enhancing user experience.',
        'Contributed to code reviews, fostering a culture of quality that improved overall team performance and reduced production bugs.',
        'Engaged with technical support teams to address customer feedback, leading to improved product performance and reliability across multiple releases.',
        'Increased user satisfaction through targeted enhancements in user interface design and functionality.',
    ];

    const EliteDescription = [
        'Analyzed construction documents to provide HVAC and plumbing cost estimates for project valuations up to $500,000.',
        'Worked with potential customers/general contractors to provide budget estimates for design/build construction projects.',
    ];

    let educationEventKey = 0;
    let jobEventKey = 0;

    const headerChild = [
        <div style={{marginTop: '10px'}}>
            <a
                href={ResumePath + ResumePDF}
                download={ResumePDF}
            >
                <Button>
                    Download Resume
                </Button>
            </a>
        </div>
    ];
    
    return (
        <Container className="_maxWidthContent">
            <SectionHeader Title="Resume" Children={headerChild} />
            <Row className="_paddingTop10">
                <Col className="_paddingBottom15">
                    <SectionSubHeader Title="Experience" />
                    <Accordion>
                        <Job 
                            JobTitle="Software Developer"
                            Company="Epic Systems"
                            CompanyLocation="Verona, WI"
                            StartMonthYear="January 2019"
                            EndMonthYear=""
                            Details={EpicDescription}
                            EventKey={(jobEventKey++).toString()}
                        />
                        <Job 
                            JobTitle="Music Director"
                            Company="The Vine Church"
                            CompanyLocation="Madison, WI"
                            StartMonthYear="July 2023"
                            EndMonthYear=""
                            Details={VineDescription}
                            EventKey={(jobEventKey++).toString()}
                        />
                        <Job 
                            JobTitle="Estimator"
                            Company="Elite Mechanical Systems"
                            CompanyLocation="Mobile, AL"
                            StartMonthYear="March 2017"
                            EndMonthYear="September 2018"
                            Details={EliteDescription}
                            EventKey={(jobEventKey++).toString()}
                        />
                        <Job
                            JobTitle="CAD Technician/Estimator"
                            Company="Solution Mechanical"
                            CompanyLocation="Mobile, AL"
                            StartMonthYear="January 2012"
                            EndMonthYear="February 2017"
                            Details={[]}
                            EventKey={(jobEventKey++).toString()}
                        />
                        <Job
                            JobTitle="Worship Leader"
                            Company="Engulf United Methodist Church"
                            CompanyLocation="Gulf Shores, AL"
                            StartMonthYear="November 2010"
                            EndMonthYear="April 2012"
                            Details={[]}
                            EventKey={(jobEventKey++).toString()}
                        />
                        <Job
                            JobTitle="CAD Technician"
                            Company="Batchelor's Mechanical Contractors"
                            CompanyLocation="Loxley, AL"
                            StartMonthYear="September 2008"
                            EndMonthYear="December 2011"
                            Details={[]}
                            EventKey={(jobEventKey++).toString()}
                        />
                    </Accordion>
                </Col>
                <Col className="_paddingTop10">
                    <SectionSubHeader Title="Education" />
                    <Accordion>
                        <Education
                            SchoolName="Oregon State University"
                            SchoolLocation="Corvallis, OR"
                            Degree="Bachelor of Science"
                            Discipline="Computer Science"
                            GPA={3.90}
                            StartMonthYear="January 2017"
                            EndMonthYear="December 2018"
                            RelevantCourseWork={OSUcourses}
                            EventKey={(educationEventKey++).toString()}
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
                            EventKey={(educationEventKey++).toString()}
                        />
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
};

export default Resume;