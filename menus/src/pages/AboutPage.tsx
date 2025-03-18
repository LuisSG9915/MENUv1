import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faEdit, faMobileAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <Container>
          <h1 className="about-title">Acerca de Menús Interactivos</h1>
          <p className="about-subtitle">
            Una plataforma moderna para visualizar y gestionar menús de restaurantes
          </p>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="section-title">Nuestra Misión</h2>
            <p className="section-text">
              En Menús Interactivos, nos dedicamos a transformar la experiencia de visualización de menús 
              de restaurantes, haciéndola más atractiva, interactiva y fácil de usar tanto para los clientes 
              como para los propietarios de restaurantes.
            </p>
            <p className="section-text">
              Nuestra plataforma permite a los restaurantes mostrar sus platillos de manera visual y detallada, 
              incluyendo información nutricional, alérgenos y etiquetas especiales, ayudando a los clientes 
              a tomar decisiones informadas sobre su comida.
            </p>
          </Col>
          <Col lg={6}>
            <div className="about-image-container">
              <img 
                src="/images/about/restaurant.jpg" 
                alt="Restaurante con menú interactivo" 
                className="about-image"
              />
            </div>
          </Col>
        </Row>

        <h2 className="section-title text-center mb-4">¿Por qué elegir Menús Interactivos?</h2>
        <Row>
          <Col md={6} lg={3} className="mb-4">
            <Card className="feature-card h-100">
              <CardBody className="text-center">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faUtensils} />
                </div>
                <h3 className="feature-title">Menús Atractivos</h3>
                <p className="feature-text">
                  Presentamos tus platillos de forma visual y atractiva, con imágenes de alta calidad y descripciones detalladas.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="feature-card h-100">
              <CardBody className="text-center">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faEdit} />
                </div>
                <h3 className="feature-title">Fácil de Actualizar</h3>
                <p className="feature-text">
                  Actualiza tus menús en tiempo real, añade nuevos platillos o modifica los existentes con facilidad.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="feature-card h-100">
              <CardBody className="text-center">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faMobileAlt} />
                </div>
                <h3 className="feature-title">Responsive</h3>
                <p className="feature-text">
                  Nuestros menús se adaptan perfectamente a cualquier dispositivo, desde móviles hasta pantallas grandes.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="feature-card h-100">
              <CardBody className="text-center">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <h3 className="feature-title">Experiencia Mejorada</h3>
                <p className="feature-text">
                  Mejora la experiencia de tus clientes con información detallada sobre ingredientes, alérgenos y valores nutricionales.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="contact-section mt-5 text-center">
          <h2 className="section-title">¿Interesado en nuestros servicios?</h2>
          <p className="section-text mb-4">
            Estamos aquí para ayudarte a crear menús interactivos atractivos para tu restaurante.
            Contáctanos hoy mismo para obtener más información.
          </p>
          <a href="mailto:info@menusinteractivos.com" className="btn btn-primary btn-lg contact-button">
            Contáctanos
          </a>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
