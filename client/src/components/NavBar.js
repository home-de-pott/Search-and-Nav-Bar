import React from 'react';
import AllDepartments from './AllDepartments.js'
import HomeDecor from './HomeDecor.js'
import DIYProjects from './DIYProjects.js'
import HomeServices from './HomeServices.js'

const NavBar = (props) => {
	const navStyle = {
		position: 'relative',
		top: '-25px'
	}
	const lineStyle = {
		position: 'absolute',
		top: '145px',
		width: '100%',
		border: '2px solid #f86202'
	}
	return (
		<div>
			<nav style = {navStyle} className="navbar navbar-expand-lg navbar-light">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<AllDepartments handleShadeIn = {props.handleShadeIn} 
														handleShadeOut = {props.handleShadeOut} 
														dropDownImage = {props.dropDownImage}
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
								<a style = {{fontSize: '14px'}} className="navBarMichael nav-link text-dark" href="#" id="navbarDropdown"
							data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Specials & Offers</a>
							</li>
						</div>
						<div style = {{width: '30px'}}></div>
						<div>
							<li className="nav-item dropdown">
								<a style = {{fontSize: '14px'}} className="navBarMichael nav-link text-dark" href="#" id="navbarDropdown"
							data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Local Ads</a>
							</li>
						</div>
					</ul>
				</div>
			</nav>
		<hr style = {lineStyle} ></hr>
		</div>
	);
}
 
export default NavBar;