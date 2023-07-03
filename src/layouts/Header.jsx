import React from 'react';
import './layouts.css';
import gmail from '../images/gmail-icon.svg'
import phone from '../images/phone-icon.svg'
import location from '../images/location-icon.svg'
import houseIcon from '../images/house-icon.svg'
import userIcon from '../images/user-icon.svg'

function Header() {
	return (
		<div className='header'>
			<div className="header-inner">
				<div className="container">
					<a href="#!" className="header-logo">
						<img src={location} alt="" />
						<p className='header-inner__text'>Rezilla, 18 Grattan St, Brooklyn</p>
					</a>
					<div className="header-call">
						<a href='#!' className='box'>
							<img src={phone} alt="" />
							<p className='header-inner__text'>+1 206-214-2298</p>
						</a>
						<a href="#!">
							<img src={gmail} alt="" />
							<p className='header-inner__text'>support@rezilla.com</p>
						</a>
					</div>
				</div>
			</div>
			<div className="navbar">
				<div className="container">
					<ul className='nav'>
						<li className='nav-item'>
							<a href="#!" className="nav-link active">Home</a>
						</li>
						<li className='nav-item'>
							<a href="#!" className="nav-link">About</a>
						</li>
						<li className='nav-item'>
							<a href="#!" className="nav-link">Listings</a>
						</li>
						<li className='nav-item'>
							<a href="#!" className="nav-link">Services</a>
						</li>
						<li className='nav-item'>
							<a href="#!" className="nav-link">Blogs</a>
						</li>
					</ul>
					<div className='navbar-logo'>
						<div className='house-icon'>
							<img src={houseIcon} alt="house-icon" width='24px' height='24px' />
						</div>
						<p>Rezilla</p>
					</div>
					<div className='register-box'>
						<img src={userIcon} alt="user-icon" />
						<div className='register-info'>
							<a href="#!">Login/</a>
							<a href="#!">Register</a>
						</div>
						<a href="#!" className='add-listing'>
							<img src={houseIcon} alt="house-icon" />
							Add Listing
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header