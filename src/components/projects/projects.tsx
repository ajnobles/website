import Container from "react-bootstrap/esm/Container";
import Project from "./project";
import './projects.css'
import smallshImg from '../../assets/projects/Smallsh_Running_Test.png';
import particleImg from '../../assets/projects/Particle_System_Demo_1.png';

const Projects = () => {

    const particleSystem = {
        Name: "Particle System",
        Description: "Particle system simulation that explores the usage of OpenCL and OpenGL. \
                      Added orbiting spheres and particle color changes to an existing project template. \
                      Source code and video demonstration available upon request.",
        Technologies:
        [
            "C/C++",
            "OpenCL",
            "OpenGL"
        ],
        ImageLocation: particleImg
    };

    const smallsh = {
        Name: "Smallsh",
        Description: "Shell program that functions as a simplified version of the Bash shell. \
                      Source code available upon request.",
        Technologies: [ "C" ],
        ImageLocation: smallshImg
    };

    return (
        <Container className="text-center">
            <h2 className="text-uppercase _fontMontserrat700">Projects</h2>
            <hr />
            <Project {...smallsh}/>
            <Project {...particleSystem } />
        </Container>
    );
};

export default Projects;