import React from 'react';
import AllDepartments from './AllDepartments.js'
import HomeDecor from './HomeDecor.js'
import DIYProjects from './DIYProjects.js'
import HomeServices from './HomeServices.js'

const NavBar = (props) => {
	return (
		<div>

		<nav className="navbar navbar-expand-lg navbar-light">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<AllDepartments />
					<HomeDecor />
					<DIYProjects />
					<HomeServices />
					<li className="nav-item active">
						<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					</li>
				</ul>
			</div>
		</nav>

		</div>
	);
}
 
export default NavBar;