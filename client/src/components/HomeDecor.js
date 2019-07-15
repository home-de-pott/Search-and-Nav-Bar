import React from 'react';

const HomeDecor = (props) => {
  return (
    <div onMouseEnter = {props.handleShadeIn} onMouseLeave = {props.handleShadeOut} >
      <li className="nav-item dropdown dropdownMichael">
          <a style = {{fontSize: '14px'}} className="navBarMichael nav-link text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Home Decor
          </a>
          <div className="dropdown-menu dropdown-menuMichael" aria-labelledby="navbarDropdown">
            <a className="dropdown-item bold" href="#">Wall Decor</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Wall Accents</a>
            <a className="dropdown-item" href="#">Wall Art</a>
            <a className="dropdown-item" href="#">Canvas Art</a>
            <a className="dropdown-item" href="#">Wall Murals</a>
            <a className="dropdown-item" href="#">Wall Decals</a>
            <a className="dropdown-item" href="#">Wall Stencils</a>
            <a className="dropdown-item" href="#">Peel & Stick Backsplash</a>
            <a className="dropdown-item" href="#"></a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item bold" href="#">Decorative Shelving</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Floating Shelves</a>
            <a className="dropdown-item" href="#">Bookshelves</a>
            <a className="dropdown-item" href="#">Corner Shelves</a>
          </div>
        </li>
    </div>
  );
}
 
export default HomeDecor;