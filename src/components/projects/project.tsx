import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image"

// TODO: CREATE EXPANDABLE MODAL

const Project = (props: ProjectProps) => {
    const tech = props.Technologies.join(', ');

    return (
        <Container fluid className="_project">
            <Image className="_projectImage"
                src={props.ImageLocation}
            />
            <h3>{props.Name}</h3>
            <div>Programming languages/Technologies used: {tech}</div>
        </Container>
    )
}

interface ProjectProps {
    Name: string,
    Description: string,
    ImageLocation?: string,
    Technologies: string[]
}

export default Project;