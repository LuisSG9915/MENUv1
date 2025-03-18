import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import RestaurantMenu from '../components/menu/RestaurantMenu';
import { Restaurant } from '../types/menu';
import { sampleRestaurants } from '../data/sampleMenus';
import './RestaurantPage.css';

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulando una carga de datos desde una API
    setLoading(true);
    setTimeout(() => {
      try {
        const foundRestaurant = sampleRestaurants.find(r => r.id === id);
        if (foundRestaurant) {
          setRestaurant(foundRestaurant);
          setError(null);
        } else {
          setError('Restaurante no encontrado');
          setRestaurant(null);
        }
      } catch (err) {
        setError('Error al cargar los datos del restaurante');
        setRestaurant(null);
      } finally {
        setLoading(false);
      }
    }, 500); // Simular tiempo de carga
  }, [id]);

  const handleGoBack = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <div className="loading-spinner"></div>
        <p className="mt-3">Cargando información del restaurante...</p>
      </Container>
    );
  }

  if (error || !restaurant) {
    return (
      <Container className="text-center py-5">
        <div className="error-container">
          <h2>Oops!</h2>
          <p>{error || 'Ocurrió un error inesperado'}</p>
          <Button color="primary" onClick={handleGoBack}>
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
            Volver a la lista de restaurantes
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <div className="restaurant-page">
      <div className="back-button-container">
        <Container fluid className="px-3 px-md-5">
          <Button color="light" onClick={handleGoBack} className="back-button">
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
            Volver a la lista
          </Button>
        </Container>
      </div>
      
      <div 
        className="restaurant-hero" 
        style={{ backgroundImage: `url(${restaurant.logo || 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'})` }}
      >
        <div className="restaurant-hero-content">
          <h1 className="restaurant-hero-title">{restaurant.name}</h1>
          <p className="restaurant-hero-subtitle">{restaurant.description}</p>
        </div>
      </div>
      
      <Container fluid className="px-3 px-md-5">
        <div className="restaurant-info-card mb-4">
          <div className="row">
            <div className="col-md-6">
              <h3>Información del restaurante</h3>
              <p><strong>Dirección:</strong> {restaurant.contactInfo?.address || 'No disponible'}</p>
              <p><strong>Teléfono:</strong> {restaurant.contactInfo?.phone || 'No disponible'}</p>
              <p><strong>Email:</strong> {restaurant.contactInfo?.email || 'No disponible'}</p>
              <p><strong>Sitio web:</strong> {restaurant.contactInfo?.website || 'No disponible'}</p>
            </div>
            <div className="col-md-6">
              <h3>Horarios</h3>
              <p>{restaurant.contactInfo?.address ? 'Lun-Vie: 9:00 - 22:00' : 'No disponible'}</p>
              <p>{restaurant.contactInfo?.address ? 'Sáb-Dom: 10:00 - 23:00' : ''}</p>
            </div>
          </div>
        </div>
        
        <RestaurantMenu restaurant={restaurant} />
      </Container>
    </div>
  );
};

export default RestaurantPage;
