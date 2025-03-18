import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Restaurant } from "../types/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import "./RestaurantList.css";

interface RestaurantListProps {
  restaurants: Restaurant[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Descubre Sabores Increíbles</h1>
          <p className="hero-subtitle">
            Explora nuestros menús interactivos y encuentra tu próxima experiencia
            gastronómica
          </p>
          <Button
            color="primary"
            className="hero-button"
            onClick={() =>
              document
                .getElementById("restaurantes-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <FontAwesomeIcon icon={faUtensils} className="me-2" />
            Explorar Menús
          </Button>
        </div>
      </div>

      <div className="restaurant-list-container">
        <div id="restaurantes-section" className="text-center mb-5">
          <h2 className="main-title">Nuestros Restaurantes</h2>
          <p className="main-subtitle">
            Selecciona un restaurante para ver su menú completo
          </p>
        </div>

        <Row>
          {restaurants.map((restaurant) => (
            <Col key={restaurant.id} md={6} lg={4} className="mb-4">
              <Card className="restaurant-card h-100">
                <div className="restaurant-card-image">
                  <img
                    src={
                      restaurant.logo ||
                      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    alt={restaurant.name}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                    }}
                  />
                </div>
                <CardBody>
                  <CardTitle tag="h3" className="restaurant-card-title">
                    {restaurant.name}
                  </CardTitle>
                  <CardText className="restaurant-card-description">
                    {restaurant.description}
                  </CardText>
                  <div className="text-center mt-auto">
                    <Button
                      tag={Link}
                      to={`/restaurant/${restaurant.id}`}
                      color="primary"
                      className="restaurant-card-button"
                    >
                      <FontAwesomeIcon icon={faUtensils} className="me-2" />
                      Ver Menú
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default RestaurantList;
