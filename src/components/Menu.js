import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import fr_png from './icon/france.png';
import uk_png from './icon/uk.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import './menu.css';

function Menu(){

  ////////////
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  ///////////
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
   
       <Navbar expand="lg" bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} className='py-3'>
      <Container>
        <Navbar.Brand href="/" className='project' style={{fontSize:"24px"}}>Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{fontSize:"20px"}}>
          <Nav.Link onClick={toggleDarkMode} >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </Nav.Link>
            <Nav.Link as={Link} to='/'>Calculatrice</Nav.Link>
            <Nav.Link as={Link} to='/Slider'>Slider</Nav.Link>
            <Nav.Link as={Link} to='/TodoList'>TodoList</Nav.Link>
            <Nav.Link as={Link} to='/api'>Api</Nav.Link>
            <Nav.Link>
            <img src={fr_png} onClick={() => changeLanguage('fr')}
              style={
                {
                  width:"20px",
                  height:"auto"
                }
              }
            />
            </Nav.Link>
            <Nav.Link>
            <img src={uk_png} onClick={() => changeLanguage('en')}
              style={
                {
                  width:"20px",
                  height:"auto"
                }
              }
            />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
};

export default Menu;
