import React from 'react';

const TopNavBar = (props) => {
  const listStyle = {
		position: 'relative',
		left: '150%',
		'fontSize': '10px'
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light">
			<div id="navbarSupportedContent">
				<ul style = {listStyle} className="navbar-nav">
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active">Store Finder</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active">Truck & Tool Rental</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active">For the Pro</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active">Gift Cards</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active">Credit Services</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active">Favorites</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active">Track Order</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active">Help</li>
				</ul>
			</div>
		</nav>
    </div>
  );
}
 
export default TopNavBar;