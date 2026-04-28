import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Stack from "react-bootstrap/esm/Stack";

import './footer.css'
import SectionHeader from "../sectionHeader/section_header";

const Footer = () => {
    return (
        <Container className="text-uppercase text-center _fontMontserrat700">
            <Row>
                <SectionHeader Title="Around the Web" />
                <Stack direction="horizontal" gap={3} className="justify-content-center">
                    <a href="http://www.linkedin.com/in/allenjnobles" className="button-style" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://github.com/ajnobles" className="button-style" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </Stack>
            </Row>
        </Container>
    );
};

export default Footer;