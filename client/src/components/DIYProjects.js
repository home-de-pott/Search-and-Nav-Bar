import React from 'react';

const DIYProjects = (props) => {
  return (
    <div onMouseEnter = {props.handleShadeIn} onMouseLeave = {props.handleShadeOut}>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">DIY Projects</a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item bold" href="#">Outdoor Ideas</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Outdoor Living Ideas and Projects</a>
            <a className="dropdown-item" href="#">Garden Ideas and Projects</a>
            <a className="dropdown-item" href="#">Doors and Windows Guides</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item bold" href="#">Indoor Updates</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Bathroom Ideas and Projects</a>
            <a className="dropdown-item" href="#">Kitchen Ideas and Projects</a>
            <a className="dropdown-item" href="#">Paint Ideas and Projects</a>
            <a className="dropdown-item" href="#">Lighting and Fans Guides</a>
            <a className="dropdown-item" href="#">Storage and Organization Guides</a>
            <a className="dropdown-item" href="#">Home Decor Ideas and Projects</a>
          </div>
        </li>
    </div>
  );
}
 
export default DIYProjects;