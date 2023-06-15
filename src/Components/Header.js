import React, { useState, useEffect } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [currentMenuTitle, setCurrentMenuTitle] = useState('');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    navigate("/login");
    // call authenticated function
  };

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  const handleMobileMenuTrigger = () => {
    toggleMenu();
  };

  useEffect(() => {
    const mobileMenuTrigger = document.querySelector(".mobile-menu-trigger");
    mobileMenuTrigger.addEventListener("click", handleMobileMenuTrigger);

    return () => {
      // Clean up the event listener when the component unmounts
      mobileMenuTrigger.removeEventListener("click", handleMobileMenuTrigger);
    };
  }, []);

  const showSubMenu = (menuItem) => {
    setSubMenuActive(true);
    const menuTitle = menuItem.firstChild.textContent;
    setCurrentMenuTitle(menuTitle);
  };

  const hideSubMenu = () => {
    setSubMenuActive(false);
    setCurrentMenuTitle('');
  };

  return (
    <>
      <section className={`header bg-blck text-black ${menuActive ? 'active' : ''}`}>
        <header className="header" style={{ borderBottom: '0.5px solid #edebeb' }}>
          <div className="container-fluid">
            <div className="row v-center">
              <div className="header-item item-left">
                <div className="logo">
                  <a href="#">logo</a>
                </div>
              </div>

              <div className="header-item item-center">
                <div className="menu-overlay" onClick={toggleMenu}></div>
                <nav className={`menu ${menuActive ? 'active' : ''}`}>
                  <div className={`mobile-menu-head ${subMenuActive ? 'active' : ''}`}>
                    <div className="go-back" onClick={hideSubMenu}>
                      <i className="fa fa-angle-left"></i>
                    </div>
                    <div className="current-menu-title">{currentMenuTitle}</div>
                    <div className="mobile-menu-close" onClick={toggleMenu}>&times;</div>
                  </div>
                  <ul className="menu-main">
                    <li>
                      <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/About-us">about</NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/ChatBot">ChatBot</NavLink>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="#" onClick={() => showSubMenu(this)}>
                        Travel <i className="fa fa-angle-down"></i>
                      </a>
                      <div className={`sub-menu single-column-menu ${subMenuActive ? 'active' : ''}`}>
                        <ul>
                          <li><NavLink className="nav-link" to="/TourList">Tour List</NavLink></li>
                          <li><NavLink className="nav-link" to="/Home">Mountain</NavLink></li>
                          <li><NavLink className="nav-link" to="/Home">Camping</NavLink></li>
                          <li><NavLink className="nav-link" to="/Home">Adventure</NavLink></li>
                          <li><NavLink className="nav-link" to="/Home">Holy Places</NavLink></li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <NavLink className="nav-link" to="/Gallery">Gallery</NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              {isAuthenticated ? (
                <div className="header-item item-right">

                  <button type="button" className="btn btn-square-navbar ml-2" onClick={handleLogout}>
                    Logout
                  </button>

                  <div className="mobile-menu-trigger">
                    <span></span>
                  </div>
                </div>
              ) : (
                  <div className="header-item item-right">

                    <button type="button" className="btn btn-square-navbar ml-2" onClick={handleLogin}>
                      Login
                  </button>

                    <div className="mobile-menu-trigger">
                      <span></span>
                    </div>
                  </div>
                )}

            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
