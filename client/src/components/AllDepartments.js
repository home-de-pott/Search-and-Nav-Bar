import React from 'react';

const AllDepartments = (props) => {
  return (
    <div onMouseEnter = {props.handleShadeIn} onMouseLeave = {props.handleShadeOut}>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Departments</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Appliances</a>
              <a className="dropdown-item" href="#">Bath & Faucets</a>
              <a className="dropdown-item" href="#">Blinds & Window Treatment</a>
              <a className="dropdown-item" href="#">Building Materials</a>
              <a className="dropdown-item" href="#">Decor & Furniture</a>
              <a className="dropdown-item" href="#">Doors & Windows</a>
              <a className="dropdown-item" href="#">Electrical</a>
              <a className="dropdown-item" href="#">Flooring & Area Rugs</a>
              <a className="dropdown-item" href="#">Hardware</a>
              <a className="dropdown-item" href="#">Heating & Cooling</a>
              <a className="dropdown-item" href="#">Kitchen & Kitchenware</a>
              <a className="dropdown-item" href="#">Lawn & Garden</a>
              <a className="dropdown-item" href="#">Lighting & Ceiling Fans</a>
              <a className="dropdown-item" href="#">Outdoor Living</a>
              <a className="dropdown-item" href="#">Paint</a>
              <a className="dropdown-item" href="#">Plumbing</a>
              <a className="dropdown-item" href="#">Storage & Organization</a>
              <a className="dropdown-item" href="#">Tools</a>
            </div>
        </li>
    </div>
  );
}
 
export default AllDepartments;