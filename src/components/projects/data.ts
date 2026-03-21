import smallshImg from '../../assets/projects/Smallsh_Running_Test.png';
import particleImg from '../../assets/projects/Particle_System_Demo_1.png';

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
        ImageLocation: particleImg
    } as IProject;

const smallsh = {
        Name: "Smallsh",
        Subtitle: "",
        Description: "Shell program that functions as a simplified version of the Bash shell. \
                      Source code available upon request.",
        Technologies: [ "C" ],
        ImageLocation: smallshImg
    } as IProject;

export const ProjectData = [
    particleSystem,
    smallsh
];

export interface IProject {
    Name: string,
    Subtitle: string,
    Description: string,
    Technologies: string[],
    ImageLocation: string,
}