import Accordion from "react-bootstrap/esm/Accordion";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import SectionHeader from "../sectionHeader/section_header";
import SectionSubHeader from "../sectionHeader/section_subheader";
import Job from "./job";
import Education from "./education";

import { type IJob, JobsData } from "./jobData";
import { type IEducation, EducationData } from "./educationData";


//import resume_pdf from '../../assets/projects/AllenNobles_Resume.pdf'
// const ResumePDF = 'AllenNobles_Resume.pdf'
// const ResumePath = '/src/assets/projects/'

const Resume = () => {

    let jobs: undefined | IJob[];
    if (JobsData && JobsData.length > 0){
        jobs = JobsData;
    }
    else {
        jobs = undefined;
    }

    let education: undefined | IEducation[];
    if (EducationData && EducationData.length > 0) {
        education = EducationData;
    }
    else {
        education = undefined;
    }

    let educationEventKey = 0;
    let jobEventKey = 0;
    
    return (
        <Container className="_maxWidthContent">
            <SectionHeader Title="Resume"  />
            <Row>
                <Col className="_paddingTop10 _paddingBottom15">
                    <SectionSubHeader Title="Experience" />
                    <Accordion>
                        {jobs && jobs.map((job: IJob) => {
                            return (
                                <Job
                                    Job={job}
                                    EventKey={(jobEventKey++).toString()}
                                />
                            );
                        })}
                    </Accordion>
                </Col>
                <Col className="_paddingTop10">
                    <SectionSubHeader Title="Education" />
                    <Accordion>
                        {education && education.map((school: IEducation) => {
                            return (
                                <Education
                                    Education={school}
                                    EventKey={(educationEventKey++).toString()}
                                />
                            );
                        })}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
};

export default Resume;