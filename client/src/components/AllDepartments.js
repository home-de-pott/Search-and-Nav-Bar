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
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-1')} onMouseLeave = {() => props.setDropImg('')}>Appliances</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-2')} onMouseLeave = {() => props.setDropImg('')}>Bath & Faucets</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-3')} onMouseLeave = {() => props.setDropImg('')}>Blinds & Window Treatment</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-4')} onMouseLeave = {() => props.setDropImg('')}>Building Materials</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-5')} onMouseLeave = {() => props.setDropImg('')}>Decor & Furniture</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-6')} onMouseLeave = {() => props.setDropImg('')}>Doors & Windows</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-7')} onMouseLeave = {() => props.setDropImg('')}>Electrical</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-8')} onMouseLeave = {() => props.setDropImg('')}>Flooring & Area Rugs</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-9')} onMouseLeave = {() => props.setDropImg('')}>Hardware</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-10')} onMouseLeave = {() => props.setDropImg('')}>Heating & Cooling</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-11')} onMouseLeave = {() => props.setDropImg('')}>Kitchen & Kitchenware</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-12')} onMouseLeave = {() => props.setDropImg('')}>Lawn & Garden</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-13')} onMouseLeave = {() => props.setDropImg('')}>Lighting & Ceiling Fans</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-14')} onMouseLeave = {() => props.setDropImg('')}>Outdoor Living</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-15')} onMouseLeave = {() => props.setDropImg('')}>Paint</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-16')} onMouseLeave = {() => props.setDropImg('')}>Plumbing</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-17')} onMouseLeave = {() => props.setDropImg('')}>Storage & Organization</a>
              <a className="dropdown-item" href="#" onMouseEnter = {() => props.setDropImg('1-18')} onMouseLeave = {() => props.setDropImg('')}>Tools</a>
              <div>
            {props.dropDownImage === '' ? (<></>) :(
              <a style = {{position: 'relative', left: '200px', top: '-432px'}} className="dropdown-item" href="#"
                  onMouseEnter = {() => props.setDropImg('1-18')} onMouseLeave = {() => props.setDropImg('')}>
              
              <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <img src="./assets/images/navbarimg/1-4.png" />
                </div>
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