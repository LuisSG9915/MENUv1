import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <div className="footer-brand">
              <FontAwesomeIcon icon={faUtensils} className="me-2" />
              Menús Interactivos
            </div>
            <p className="footer-description">
              Plataforma para visualizar menús de restaurantes de forma interactiva y atractiva.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Enlaces Rápidos</h5>
            <ul className="footer-links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/about">Acerca de</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#">Política de Privacidad</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="footer-heading">Contacto</h5>
            <ul className="footer-contact">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                info@menusinteractivos.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +52 555 123 4567
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <div className="footer-bottom text-center">
          <p className="mb-0">
            &copy; {currentYear} Menús Interactivos. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
