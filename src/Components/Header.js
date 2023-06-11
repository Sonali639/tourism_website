import React from 'react'

import './header.css'
import { NavLink } from 'react-router-dom';

function header() {
  const icon = {
    color: "white",
    fontSize: "16px"
    
};



  return (
    <>
  { /*     <nav classeName="navbar navbar-expand-lg navbar-react py-4">
  <a classNameName="navbar-brand" href="!#">Navbar</a>
  <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span classNameName="navbar-toggler-icon"></span>
  </button>

  <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
    <ul classNameName="navbar-nav mr-auto">
      <li classNameName="nav-item active">
        <NavLink classNameName="nav-link" to="/">Home</NavLink>
      </li>
      <li classNameName="nav-item">
       <NavLink classNameName="nav-link" to="/Home">about</NavLink>
      </li>
      <li classNameName="nav-item dropdown">
        <a classNameName="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
          <a classNameName="dropdown-item" href="!#">Action</a>
          <a classNameName="dropdown-item" href="!#">Another action</a>
          <div classNameName="dropdown-divider"></div>
          <a classNameName="dropdown-item" href="!#">Something else here</a>
        </div>
      </li>
      <li classNameName="nav-item">
        <a classNameName="nav-link disabled" href="!#">Disabled</a>
      </li>
    </ul>
    <form classNameName="form-inline my-2 my-lg-0">
      <input classNameName="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>*/}
{/*<section style={{backgroundColor:'rgb(140, 155, 140)'}}>
  <div className="container-fluid">
    <div className="row">
      <div className="col text-left">
<div>   <i className=" fa fa-envelope px-2" style={icon} aria-hidden="true"></i>
        sonalisaluja12@gmail.com</div>
      </div>
      <div className="col text-right">
      <div className="icos pt-2">
                                <i className="fa fa-instagram px-2" style={icon} aria-hidden="true"></i>
                                <i className=" fa fa-facebook px-2" style={icon} aria-hidden="true"></i>
                                <i className=" fa fa-twitter px-2" style={icon} aria-hidden="true"></i>
                                <i className=" fa fa-envelope px-2" style={icon} aria-hidden="true"></i>
                            </div>
      </div>
    </div>
    </div>
</section>*/}


    <section className="header bg-blck text-white">
      <header className="header" style={{borderBottom:'0.5px solid #edebeb'}}>
        <div className="container-fluid">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="logo">
                <a href="#">logo</a>
              </div>
            </div>

            <div className="header-item item-center">
              <div className="menu-overlay"></div>
              <nav className="menu">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">&times;</div>
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
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li><NavLink className="nav-link" to="/TourList">Tour List</NavLink></li>
                        <li><NavLink className="nav-link" to="/Home">Mountain</NavLink></li>
                        <li><NavLink className="nav-link" to="/Home">Campinng</NavLink></li>
                        <li><NavLink className="nav-link" to="/Home">Adventure</NavLink></li>
                        <li><NavLink className="nav-link" to="/HolyPlace">Holy Places</NavLink></li>
                      </ul>
                    </div>
                  </li>
                  {/* <li>
                    <NavLink className="nav-link" to="">About</NavLink>
                  </li> */}
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
  )
}
export default header;
