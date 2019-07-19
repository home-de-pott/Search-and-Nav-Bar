import React from 'react';
import AllDepartments from './AllDepartments.js'
import HomeDecor from './HomeDecor.js'
import DIYProjects from './DIYProjects.js'
import HomeServices from './HomeServices.js'

const NavBar = (props) => {
	const navStyle = {
		position: 'relative'
	}
	const lineStyle = {
		position: 'relative',
		width: '100%',
		border: '2px solid #f86202'
	}
	return (
		<>
			<nav style = {navStyle} className="navbar navbar-expand-md navbar-light">
					<ul className="navbar-nav mr-auto">
						<AllDepartments handleShadeIn = {props.handleShadeIn} 
														handleShadeOut = {props.handleShadeOut} 
														dropDownImage = {props.dropDownImage}
														imageClick = {props.imageClick}
														setDropImg = {props.setDropImg}/>
						<div style = {{width: '30px'}}></div>
						<HomeDecor handleShadeIn = {props.handleShadeIn} handleShadeOut = {props.handleShadeOut}/>
						<div style = {{width: '30px'}}></div>
						<DIYProjects handleShadeIn = {props.handleShadeIn} handleShadeOut = {props.handleShadeOut} />
						<div style = {{width: '30px'}}></div>
						<HomeServices handleShadeIn = {props.handleShadeIn} handleShadeOut = {props.handleShadeOut} />
						<div style = {{width: '30px'}}></div>
						<div>
							<li className="nav-item dropdown">
								<a style = {{fontSize: '14px'}} className="d-none d-lg-block navBarMichael nav-link text-dark" href="#" id="navbarDropdown"
							data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Specials & Offers</a>
							</li>
						</div>
						<div style = {{width: '30px'}}></div>
						<div>
							<li className="nav-item dropdown">
								<a style = {{fontSize: '14px'}} className="d-none d-lg-block navBarMichael nav-link text-dark" href="#" id="navbarDropdown"
							data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Local Ads</a>
							</li>
						</div>
					</ul>
			</nav>
		<hr style = {lineStyle} ></hr>
		</>
	);
}
 
export default NavBar;