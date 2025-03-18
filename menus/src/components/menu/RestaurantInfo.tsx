import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Restaurant as RestaurantType } from '../../types/menu';
import './RestaurantInfo.css';

interface RestaurantInfoProps {
  restaurant: RestaurantType;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurant }) => {
  return (
    <div className="restaurant-info" style={{width: '100%', maxWidth: '100%', overflow: 'visible', boxSizing: 'border-box', padding: '20px'}}>
      <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', margin: '0'}}>
        <div style={{flex: '1 1 50%', minWidth: '300px', padding: '0 15px', boxSizing: 'border-box'}}>
          <Card className="mb-4">
            <CardBody>
              <h3 className="mb-4">Sobre Nosotros</h3>
              <p className="restaurant-about">{restaurant.description}</p>
              
              {restaurant.contactInfo && (
                <div className="restaurant-contact-details mt-4">
                  <h4 className="mb-3">Información de Contacto</h4>
                  <ul className="list-unstyled">
                    {restaurant.contactInfo.address && (
                      <li className="mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 contact-icon" />
                        {restaurant.contactInfo.address}
                      </li>
                    )}
                    {restaurant.contactInfo.phone && (
                      <li className="mb-2">
                        <FontAwesomeIcon icon={faPhone} className="me-2 contact-icon" />
                        {restaurant.contactInfo.phone}
                      </li>
                    )}
                    {restaurant.contactInfo.email && (
                      <li className="mb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="me-2 contact-icon" />
                        {restaurant.contactInfo.email}
                      </li>
                    )}
                    {restaurant.contactInfo.website && (
                      <li className="mb-2">
                        <FontAwesomeIcon icon={faGlobe} className="me-2 contact-icon" />
                        <a href={`https://${restaurant.contactInfo.website}`} target="_blank" rel="noopener noreferrer">
                          {restaurant.contactInfo.website}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
        
        <div style={{flex: '1 1 50%', minWidth: '300px', padding: '0 15px', boxSizing: 'border-box'}}>
          <Card className="mb-4">
            <CardBody>
              <h3 className="mb-4">Horarios de Atención</h3>
              <table className="table opening-hours-table">
                <tbody>
                  <tr>
                    <td>Lunes - Viernes</td>
                    <td>11:00 - 22:00</td>
                  </tr>
                  <tr>
                    <td>Sábados</td>
                    <td>12:00 - 23:00</td>
                  </tr>
                  <tr>
                    <td>Domingos</td>
                    <td>12:00 - 20:00</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="mt-4">
                <h4 className="mb-3">Servicios</h4>
                <ul className="services-list">
                  <li>Wi-Fi Gratuito</li>
                  <li>Estacionamiento</li>
                  <li>Acceso para Sillas de Ruedas</li>
                  <li>Área para Niños</li>
                  <li>Reservaciones</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
