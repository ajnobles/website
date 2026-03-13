import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/header';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import Resume from './components/resume/resume';
import Navigation from './components/navigation/navigation';
import { Container, Row } from 'react-bootstrap';
import Footer from './components/footer/footer';

function App() {

  const cssDark = "bg-dark text-light _sectionPadding";
  const cssLight = "bg-light text-dark _sectionPadding";

  return (
    <>
        <span id="home" />
        <Navigation />
        <Container
            fluid
        >
          <Row className={cssLight}>
            <Header />
          </Row>
          <Row id="projects" className={cssDark}>
            <Projects />
          </Row>
          <Row id="resume" className={cssLight}>
            <Resume />
          </Row>
          <Row id="contact" className={cssDark}>
            <Contact />
          </Row>
          <Row className={cssLight}>
            <Footer />
          </Row>
        </Container>
    </>
  )
}

export default App
