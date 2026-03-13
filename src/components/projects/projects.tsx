import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Project from "./project";
import './projects.css'
import smallshImg from '../../assets/projects/Smallsh_Running_Test.png';
import particleImg from '../../assets/projects/Particle_System_Demo_1.png';
import { Accordion } from "react-bootstrap";
import SectionHeader from "../sectionHeader/section_header";

const Projects = () => {
    
    let eventKey = 0;

    const particleSystem = {
        Name: "Particle System",
        Subtitle: "Introduction to Parallel Programming final assignment.",
        Description: "Particle system simulation that explores the usage of OpenCL and OpenGL. \
                      Added orbiting spheres and particle color changes to an existing project template. \
                      Source code and video demonstration available upon request.",
        Technologies:
        [
            "C/C++",
            "OpenCL",
            "OpenGL"
        ],
        ImageLocation: particleImg,
        EventKey: (eventKey++).toString()
    };

    const smallsh = {
        Name: "Smallsh",
        Subtitle: "",
        Description: "Shell program that functions as a simplified version of the Bash shell. \
                      Source code available upon request.",
        Technologies: [ "C" ],
        ImageLocation: smallshImg,
        EventKey: (eventKey++).toString()
    };

    return (
        <Container className="_maxWidthContent">
            <Row>
                <Col>
                    <SectionHeader Title="Projects" />
                    <Accordion>
                        <Project {...smallsh} />
                        <Project {...particleSystem} />
                    </Accordion>
                </Col>
            </Row>
            
        </Container>

        // <Accordion className="_maxWidthContent">
        //     <SectionHeader Title="Projects" />
        //     <Container>
        //         <Row className="justify-content-center">
        //             <Col>
        //                 <Project {...smallsh}/>
        //             </Col>
        //             <Col>
        //                 <Project {...particleSystem } />
        //             </Col>
        //             </Row>
        //     </Container>
        // </Accordion>
    );
};

export default Projects;