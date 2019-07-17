import React from 'react';

const TopNavBar = (props) => {
  const listStyle = {
		position: 'relative',
		left: '150%',
		'fontSize': '10px'
  }
  return (
    <div className = 'd-none d-lg-block'>
    <nav className="navbar navbar-expand-lg navbar-light">
			<div id="navbarSupportedContent">
				<ul style = {listStyle} className="navbar-nav">
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active topNavMichael">Store Finder</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active topNavMichael">Truck & Tool Rental</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active topNavMichael">For the Pro</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active topNavMichael">Gift Cards</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active topNavMichael">Credit Services</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active topNavMichael">Favorites</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active topNavMichael">Track Order</li>
					<li style = {{margin: '0 15px 0px 0px'}} className="nav-item active topNavMichael">Help</li>
				</ul>
			</div>
		</nav>
    </div>
  );
}
 
export default TopNavBar;