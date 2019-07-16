import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const AllDepartments = (props) => {
  {/* <img style = {{position: 'absolute', left: '248px', top: '0px'}} src = {`https://home-de-potts.s3.us-east-2.amazonaws.com/${props.dropDownImage}.png`} height = "400px" />)  */}
  return (
    <div onMouseEnter = {props.handleShadeIn} onMouseLeave = {props.handleShadeOut}>
      <li className="nav-item dropdown dropdownMichael">
          <a style = {{fontSize: '14px'}} className="navBarMichael nav-link text-dark" href="#" id="navbarDropdown"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Departments</a>
            <div style = {{height: '450px'}} className="dropdown-menu dropdown-menuMichael" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Appliances')} onMouseLeave = {() => props.setDropImg('')}>Appliances</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Bath & Faucets')} onMouseLeave = {() => props.setDropImg('')}>Bath & Faucets</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Blinds & Window Treatment')} onMouseLeave = {() => props.setDropImg('')}>Blinds & Window Treatment</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Building Materials')} onMouseLeave = {() => props.setDropImg('')}>Building Materials</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Decor & Furniture')} onMouseLeave = {() => props.setDropImg('')}>Decor & Furniture</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Doors & Windows')} onMouseLeave = {() => props.setDropImg('')}>Doors & Windows</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Electrical')} onMouseLeave = {() => props.setDropImg('')}>Electrical</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Flooring & Area Rugs')} onMouseLeave = {() => props.setDropImg('')}>Flooring & Area Rugs</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Hardware')} onMouseLeave = {() => props.setDropImg('')}>Hardware</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Heating & Cooling')} onMouseLeave = {() => props.setDropImg('')}>Heating & Cooling</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Kitchen & Kitchenware')} onMouseLeave = {() => props.setDropImg('')}>Kitchen & Kitchenware</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Lawn & Garden')} onMouseLeave = {() => props.setDropImg('')}>Lawn & Garden</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Lighting & Ceiling Fans')} onMouseLeave = {() => props.setDropImg('')}>Lighting & Ceiling Fans</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Outdoor Living')} onMouseLeave = {() => props.setDropImg('')}>Outdoor Living</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Landscaping')} onMouseLeave = {() => props.setDropImg('')}>Landscaping</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Plumbing')} onMouseLeave = {() => props.setDropImg('')}>Plumbing</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Storage & Organization')} onMouseLeave = {() => props.setDropImg('')}>Storage & Organization</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('Tools')} onMouseLeave = {() => props.setDropImg('')}>Tools</a>
              <div>
            {props.dropDownImage.length === 0 ? (<></>) :(
              <a style = {{position: 'relative', left: '200px', top: '-432px'}} className="dropdown-item" href="#"
                  onMouseEnter = {() => props.setDropImg('1-18')} onMouseLeave = {() => props.setDropImg('')}>
              
              <Carousel autoPlay infiniteLoop showThumbs={false}>
                {props.dropDownImage.map((item) => {
                  return (
                    <div>
                      <img src={`https://home-de-potts.s3.us-east-2.amazonaws.com/items/${item}-0.jpg`} />
                    </div>
                  )
                })}
                
                <div>
                    <img src="./assets/images/navbarimg/1-5.png" />
                </div>
              </Carousel>
              
              </a>
            )}
              </div>
            </div>
        </li>
    </div>
  );
}
 
export default AllDepartments;