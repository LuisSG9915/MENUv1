import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Badge, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAllergies, faTags, faUtensils, faFire } from '@fortawesome/free-solid-svg-icons';
import { MenuItem as MenuItemType } from '../../types/menu';
import './MenuItemDetail.css';

interface MenuItemDetailProps {
  item: MenuItemType;
  currency: string;
  isOpen: boolean;
  toggle: () => void;
  onAddToOrder?: (item: MenuItemType) => void;
}

const MenuItemDetail: React.FC<MenuItemDetailProps> = ({ 
  item, 
  currency, 
  isOpen, 
  toggle, 
  onAddToOrder 
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="menu-item-detail-modal">
      <ModalHeader toggle={toggle}>{item.name}</ModalHeader>
      <ModalBody>
        <div className="menu-item-detail-image-container">
          <img 
            src={item.image || 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
            alt={item.name} 
            className="menu-item-detail-image" 
            onError={(e) => {
              e.currentTarget.src = 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
            }}
          />
          {item.popular && (
            <Badge color="danger" pill className="popular-badge">
              Popular
            </Badge>
          )}
        </div>
        
        <div className="menu-item-detail-content mt-3">
          <h5 className="menu-item-detail-price">{currency} {item.price.toFixed(2)}</h5>
          <p className="menu-item-detail-description">{item.description}</p>
          
          {item.tags && item.tags.length > 0 && (
            <div className="menu-item-detail-section">
              <h6><FontAwesomeIcon icon={faTags} className="me-2" />Etiquetas</h6>
              <div>
                {item.tags.map((tag, index) => (
                  <Badge key={index} color="info" pill className="me-1 mb-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {item.allergens && item.allergens.length > 0 && (
            <div className="menu-item-detail-section">
              <h6><FontAwesomeIcon icon={faAllergies} className="me-2" />Alu00e9rgenos</h6>
              <div>
                {item.allergens.map((allergen, index) => (
                  <Badge key={index} color="warning" pill className="me-1 mb-1">
                    {allergen}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {item.nutritionalInfo && (
            <div className="menu-item-detail-section">
              <h6><FontAwesomeIcon icon={faFire} className="me-2" />Informaciu00f3n Nutricional</h6>
              <Row>
                {item.nutritionalInfo.calories && (
                  <Col xs={6} md={3}>
                    <div className="nutrition-item">
                      <span className="nutrition-value">{item.nutritionalInfo.calories}</span>
                      <span className="nutrition-label">Caloru00edas</span>
                    </div>
                  </Col>
                )}
                {item.nutritionalInfo.protein && (
                  <Col xs={6} md={3}>
                    <div className="nutrition-item">
                      <span className="nutrition-value">{item.nutritionalInfo.protein}g</span>
                      <span className="nutrition-label">Proteu00ednas</span>
                    </div>
                  </Col>
                )}
                {item.nutritionalInfo.carbs && (
                  <Col xs={6} md={3}>
                    <div className="nutrition-item">
                      <span className="nutrition-value">{item.nutritionalInfo.carbs}g</span>
                      <span className="nutrition-label">Carbohidratos</span>
                    </div>
                  </Col>
                )}
                {item.nutritionalInfo.fat && (
                  <Col xs={6} md={3}>
                    <div className="nutrition-item">
                      <span className="nutrition-value">{item.nutritionalInfo.fat}g</span>
                      <span className="nutrition-label">Grasas</span>
                    </div>
                  </Col>
                )}
              </Row>
            </div>
          )}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cerrar</Button>
        {onAddToOrder && item.available && (
          <Button color="primary" onClick={() => onAddToOrder(item)}>
            <FontAwesomeIcon icon={faUtensils} className="me-2" />
            Agregar
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default MenuItemDetail;
