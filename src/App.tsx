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

  return (
    <>
        <span id="home" />
        <Navigation />
        <Container 
            fluid
        >
          <Row className='bg-light text-dark _mainContainerRow'>
            <Header />
          </Row>
          <Row className='bg-dark text-light _mainContainerRow'>
            <Projects />
          </Row>
          <Row className='bg-light text-dark _mainContainerRow'>
            <Resume />
          </Row>
          <Row className='bg-dark text-light _mainContainerRow'>
            <Contact />
          </Row>
          <Row className='bg-light text-dark _mainContainerRow'>
            <Footer />
          </Row>
        </Container>
    </>
  )
}

export default App
