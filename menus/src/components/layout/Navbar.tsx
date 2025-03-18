import React from 'react';
import { Navbar as ReactstrapNavbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <ReactstrapNavbar color="dark" dark expand="md" className="main-navbar" container="fluid">
        <NavbarBrand tag={Link} to="/" className="navbar-brand ms-4">
          <FontAwesomeIcon icon={faUtensils} className="me-2" />
          Menús Interactivos
        </NavbarBrand>
        <Nav className="ms-auto me-4" navbar>
          <NavItem>
            <NavLink tag={Link} to="/" className={isHomePage ? 'active' : ''}>
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Inicio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
              Acerca de
            </NavLink>
          </NavItem>
        </Nav>
    </ReactstrapNavbar>
  );
};

export default Navbar;
