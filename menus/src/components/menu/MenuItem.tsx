import React from 'react';
import { Card, CardBody, CardTitle, CardText, Badge, Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { MenuItem as MenuItemType } from '../../types/menu';
import './MenuItem.css';

interface MenuItemProps {
  item: MenuItemType;
  currency: string;
  onAddToOrder?: (item: MenuItemType) => void;
  onShowDetails?: (item: MenuItemType) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, currency, onAddToOrder, onShowDetails }) => {
  return (
    <Card className="menu-item-card mb-3">
      <div className="menu-item-image-container">
        <img 
          src={item.image || 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
          alt={item.name} 
          className="menu-item-image" 
          onError={(e) => {
            e.currentTarget.src = 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
          }}
        />
        {item.popular && (
          <Badge color="danger" pill className="popular-badge">
            <FontAwesomeIcon icon={faHeart} /> Popular
          </Badge>
        )}
      </div>
      <CardBody>
        <Row>
          <Col>
            <CardTitle tag="h5" className="menu-item-title">{item.name}</CardTitle>
          </Col>
          <Col xs="auto">
            <span className="menu-item-price">{currency} {item.price.toFixed(2)}</span>
          </Col>
        </Row>
        <CardText className="menu-item-description">{item.description}</CardText>
        
        <div className="menu-item-tags">
          {item.tags && item.tags.map((tag, index) => (
            <Badge key={index} color="info" pill className="me-1">
              {tag}
            </Badge>
          ))}
          {item.allergens && item.allergens.length > 0 && (
            <Badge color="warning" pill className="me-1">
              Alérgenos
            </Badge>
          )}
        </div>
        
        <div className="menu-item-actions mt-2">
          {onShowDetails && (
            <Button color="link" size="sm" onClick={() => onShowDetails(item)} className="me-2">
              <FontAwesomeIcon icon={faInfoCircle} /> Detalles
            </Button>
          )}
          {onAddToOrder && item.available && (
            <Button color="primary" size="sm" onClick={() => onAddToOrder(item)}>
              Agregar
            </Button>
          )}
          {!item.available && (
            <Badge color="secondary" pill>
              No disponible
            </Badge>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default MenuItem;
