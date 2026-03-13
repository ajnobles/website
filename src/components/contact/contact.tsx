import Container from "react-bootstrap/esm/Container";
import SectionHeader from "../sectionHeader/section_header";

const Contact = () => {
    return (
        <Container className="text-center text-uppercase _fontMontserrat700">
            <SectionHeader Title="Contact Me" />
            <h4>
                <a href="mailto: allennobles@mac.com">allennobles@mac.com</a>
            </h4>
        </Container>
    )
};

export default Contact;