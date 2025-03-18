import React, { useState } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faInfoCircle, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Restaurant as RestaurantType, MenuItem as MenuItemType } from "../../types/menu";
import MenuCategory from "./MenuCategory";
// Importando desde archivos locales
import MenuItemDetail from "./MenuItemDetail.tsx";
import RestaurantInfo from "./RestaurantInfo.tsx";
import "./RestaurantMenu.css";

interface RestaurantMenuProps {
  restaurant: RestaurantType;
}

const RestaurantMenu: React.FC<RestaurantMenuProps> = ({ restaurant }) => {
  const [activeTab, setActiveTab] = useState("menu");
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [showItemDetail, setShowItemDetail] = useState(false);

  const toggleTab = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleShowDetails = (item: MenuItemType) => {
    setSelectedItem(item);
    setShowItemDetail(true);
  };

  const handleCloseDetails = () => {
    setShowItemDetail(false);
  };

  return (
    <div
      className="restaurant-menu-container"
      style={{ width: "100%", maxWidth: "100%", overflow: "visible" }}
    >
      <div className="restaurant-header" style={{ width: "100%", maxWidth: "100%" }}>
        <Container fluid className="px-0">
          <Row className="align-items-center g-0">
            <Col xs={12} md={2} className="text-center text-md-start">
              {restaurant.logo && (
                <img
                  src={restaurant.logo}
                  alt={restaurant.name}
                  className="restaurant-logo"
                />
              )}
            </Col>
            <Col xs={12} md={10}>
              <h1 className="restaurant-name">{restaurant.name}</h1>
              <p className="restaurant-description">{restaurant.description}</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          padding: "1rem",
          boxSizing: "border-box",
        }}
        className="mt-4"
      >
        <div className="text-center mb-4">
          <Nav className="restaurant-nav" tabs>
            <NavItem>
              <NavLink
                className={`nav-link-animated ${activeTab === "menu" ? "active" : ""}`}
                onClick={() => toggleTab("menu")}
              >
                <div className="nav-icon-container">
                  <FontAwesomeIcon icon={faUtensils} className="nav-icon" />
                </div>
                <span className="nav-text">Menú</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`nav-link-animated ${activeTab === "info" ? "active" : ""}`}
                onClick={() => toggleTab("info")}
              >
                <div className="nav-icon-container">
                  <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
                </div>
                <span className="nav-text">Información</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`nav-link-animated ${activeTab === "contact" ? "active" : ""}`}
                onClick={() => toggleTab("contact")}
              >
                <div className="nav-icon-container">
                  <FontAwesomeIcon icon={faPhone} className="nav-icon" />
                </div>
                <span className="nav-text">Contacto</span>
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            overflow: "visible",
            boxSizing: "border-box",
          }}
        >
          {activeTab === "menu" && (
            <div
              className="menu-categories-container"
              style={{
                width: "100%",
                maxWidth: "100%",
                overflow: "visible",
                boxSizing: "border-box",
                padding: "0",
              }}
            >
              {restaurant.categories.map((category) => (
                <MenuCategory
                  key={category.id}
                  category={category}
                  currency={restaurant.currency}
                  onShowDetails={handleShowDetails}
                />
              ))}
            </div>
          )}

          {activeTab === "info" && (
            <div
              style={{
                width: "100%",
                maxWidth: "100%",
                overflow: "visible",
                boxSizing: "border-box",
              }}
            >
              <RestaurantInfo restaurant={restaurant} />
            </div>
          )}

          {activeTab === "contact" && restaurant.contactInfo && (
            <div
              className="contact-info"
              style={{
                width: "100%",
                maxWidth: "100%",
                overflow: "visible",
                boxSizing: "border-box",
                padding: "20px",
              }}
            >
              <h3>Información de Contacto</h3>
              <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
                <div
                  style={{
                    flex: "1 1 50%",
                    minWidth: "300px",
                    padding: "0 15px",
                    boxSizing: "border-box",
                  }}
                >
                  {restaurant.contactInfo.phone && (
                    <p>
                      <strong>Teléfono:</strong> {restaurant.contactInfo.phone}
                    </p>
                  )}
                  {restaurant.contactInfo.email && (
                    <p>
                      <strong>Email:</strong> {restaurant.contactInfo.email}
                    </p>
                  )}
                  {restaurant.contactInfo.address && (
                    <p>
                      <strong>Dirección:</strong> {restaurant.contactInfo.address}
                    </p>
                  )}
                  {restaurant.contactInfo.website && (
                    <p>
                      <strong>Sitio web:</strong>{" "}
                      <a
                        href={`https://${restaurant.contactInfo.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {restaurant.contactInfo.website}
                      </a>
                    </p>
                  )}
                </div>
                <div
                  style={{
                    flex: "1 1 50%",
                    minWidth: "300px",
                    padding: "0 15px",
                    boxSizing: "border-box",
                  }}
                >
                  {restaurant.contactInfo.socialMedia && (
                    <div className="social-media">
                      <h4>Redes Sociales</h4>
                      <ul className="list-unstyled">
                        {restaurant.contactInfo.socialMedia.facebook && (
                          <li>
                            <a
                              href={`https://${restaurant.contactInfo.socialMedia.facebook}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Facebook
                            </a>
                          </li>
                        )}
                        {restaurant.contactInfo.socialMedia.instagram && (
                          <li>
                            <a
                              href={`https://${restaurant.contactInfo.socialMedia.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Instagram
                            </a>
                          </li>
                        )}
                        {restaurant.contactInfo.socialMedia.twitter && (
                          <li>
                            <a
                              href={`https://${restaurant.contactInfo.socialMedia.twitter}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Twitter
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showItemDetail && selectedItem && (
        <MenuItemDetail
          item={selectedItem}
          currency={restaurant.currency}
          isOpen={showItemDetail}
          toggle={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default RestaurantMenu;
