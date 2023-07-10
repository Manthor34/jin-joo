import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const MainNavbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isNoodlePage = location.pathname === '/noodle';
  const isRestaurantPage = location.pathname === '/restaurants';
  const isMenuPage = location.pathname === '/menu';
  const NavClassnames = classNames({
    restaurantNav: location.pathname === '/restaurants',
    normalNav: location.pathname !== '/restaurants',
  });
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  // const navbarClasses = isMenuPage ? 'invertNav' : isRestaurantPage ? 'invertNav' : '';
  const navbarClasses = isRestaurantPage ? 'invertNav' : '';
  const containerClasses = isMenuPage && isMobileMenuOpen ? 'navbar-container navbar-bg' : 'navbar-container';
  return (
    <nav className={`${NavClassnames} ${navbarClasses}`}>
      <div className={containerClasses}>
        <div className="navbar-logo">
        </div>
        <div className={`navbar-burger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <div className="menu-btn">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="links accueil" onClick={toggleMobileMenu}>
            <span className={`navText ${location.pathname === '/' ? 'active' : ''}`}>
              ACCUEIL
            </span>
          </Link>
          <ul>
              <li>
                <Link to="/menu" className="links" onClick={toggleMobileMenu}>
                  <span className={`navText ${isMenuPage ? 'active' : ''}`}>
                    MENU
                  </span>
                </Link>
              </li>
              <li>
                {isNoodlePage ? (
                  <span className="navText bimIsArt links" onClick={toggleMobileMenu}>
                    BIBIMBAP IS ART
                  </span>
                ) : (
                  <Link to="/noodle" className="links" onClick={toggleMobileMenu}>
                    <span className="navText">BIBIMBAP IS ART</span>
                  </Link>
                )}
              </li>
              <li>
                <Link to="/restaurants" className="links" onClick={toggleMobileMenu}>
                  <span className="navText">NOS RESTAURANTS</span>
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;