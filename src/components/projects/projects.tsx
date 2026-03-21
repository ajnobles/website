import Accordion from "react-bootstrap/esm/Accordion";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import SectionHeader from "../sectionHeader/section_header";
import Project from "./project";
import { type IProject, ProjectData} from './data';


const Projects = () => {
    
    let eventKey = 0;
    
    let projects;
    if (ProjectData && ProjectData.length > 0) {
        projects = ProjectData;
    }
    else {
        projects = undefined;
    }

    return (
        <Container className="_maxWidthContent">
            <Row>
                <Col>
                    <SectionHeader Title="Projects" />
                    <Accordion>
                        {
                          projects && projects.map((project: IProject) => {
                            return (<Project
                              Project={project}
                              EventKey={(eventKey++).toString()}
                            />)
                          })
                        }
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;