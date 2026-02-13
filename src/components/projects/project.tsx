import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image"

// TODO: CREATE EXPANDABLE MODAL

const Project = (props: ProjectProps) => {
    const tech = props.Technologies.join(', ');

    return (
        <Container fluid className="_project _fontLato _textMaxWidth">
            <Image className="_projectImage"
                src={props.ImageLocation}
            />
            <h3><b>{props.Name}</b></h3>
            <div>{props.Description}</div>
            <div><i>Programming languages/Technologies used: {tech}</i></div>
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