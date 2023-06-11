import React, { useState } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';




function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [currentMenuTitle, setCurrentMenuTitle] = useState('');

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  const showSubMenu = (hasChildren) => {
    setSubMenuActive(true);

    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    setCurrentMenuTitle(menuTitle);
  };

  const hideSubMenu = () => {
    setSubMenuActive(false);
    setCurrentMenuTitle('');
  };



  return (
    <>
      <section className={`header bg-blck text-white ${menuActive ? 'active' : ''}`}>
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
                    <div className="current-menu-title"></div>
                    <div className="mobile-menu-close" onClick={toggleMenu}>&times;</div>
                  </div>
                  <ul className="menu-main">
                    <li>
                      <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/About-us">about</NavLink>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="#">Travel <i className="fa fa-angle-down"></i></a>
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

              <div className="header-item item-right">
                <a href="tel:6395673945">
                  <button type="button" className="btn btn-square-navbar ml-2">
                    <i className="fa fa-phone"></i> 6395673945
                  </button>
                </a>

                <div className="mobile-menu-trigger">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Header;
