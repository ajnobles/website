import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Stack from "react-bootstrap/esm/Stack";

const Footer = () => {
    return (
        <Container className="align-items-center">
            <Row>
                <h4>Around the Web</h4>
                <Stack direction="horizontal">
                    <Button href="http://www.linkedin.com/in/allenjnobles">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Button>
                    <Button href="http://www.linkedin.com/in/allenjnobles">
                        <FontAwesomeIcon icon={faGithub} />
                    </Button>
                </Stack>
            </Row>
        </Container>
    );
};

export default Footer;