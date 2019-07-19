import React from 'react';

const HomeServices = (props) => {
  return (
    <div className = 'd-none d-md-block' onMouseEnter = {props.handleShadeIn} onMouseLeave = {props.handleShadeOut} >
      <li className="nav-item dropdown dropdownMichael">
          <a style = {{fontSize: '14px'}} className="navBarMichael nav-link text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Home Services
          </a>
          <div className="dropdown-menu dropdown-menuMichael" aria-labelledby="navbarDropdown">
            <a className="dropdown-item bold" href="#">Flooring Installation</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Carpet Installation</a>
            <a className="dropdown-item" href="#">Hardwood Flooring Installation</a>
            <a className="dropdown-item" href="#">Laminate Flooring Installation</a>
            <a className="dropdown-item" href="#">Tile Installation</a>
            <a className="dropdown-item" href="#">Vinyl Flooring Installation</a>
            <a className="dropdown-item" href="#">Schedule a Measure</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item bold" href="#">Heating & Cooling Services</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">HVAC Installation</a>
            <a className="dropdown-item" href="#">HVAC Maintenance</a>
            <a className="dropdown-item" href="#">HVAC Repair</a>
          </div>
        </li>
    </div>
  );
}
 
export default HomeServices;