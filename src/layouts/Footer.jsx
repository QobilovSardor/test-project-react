import React from 'react'
import houseIcon from '../images/house-icon.svg'
import callIcon from '../images/phone2.svg'
import emailIcon from '../images/gmail2.svg'
import newxtIcon from '../images/next-arrow.svg'
import socialMedia from '../images/social-media.svg'

function Footer() {
	return (
		<>
			<div className='footer'>
				<div className="container">
					<div className="col-lg-3">
						<div className="logo">
							<div className="logo-icon">
								<img src={houseIcon} alt="" />
							</div>
							<p>Rezilla</p>
						</div>
						<p>2728 Hickory StreetSalt Lake City, UT 84104</p>
						<a href='#!' className="cal cal-one">
							<img src={callIcon} alt="" />
							<p>+1 206-214-2298</p>
						</a>
						<a href='#!' className="cal">
							<img src={emailIcon} alt="" />
							<p>support@rezilla.com</p>
						</a>
					</div>
					<div className="col-lg-3">
						<h4>Quick Links</h4>
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Listings</li>
							<li>Services</li>
							<li>Blogs</li>
							<li>Become a Agent</li>
						</ul>
					</div>
					<div className="col-lg-3">
						<h4>Discovery</h4>
						<ul>
							<li>Canada</li>
							<li>United States</li>
							<li>Germany</li>
							<li>Africa</li>
							<li>India</li>
						</ul>
					</div>

					<div className='col-lg-4'>
						<h3>Subscribe to our Newsletter!</h3>
						<div className="form-box">
							<input type="text" placeholder='Email Address' />
							<div className="next-arrow">
								<img src={newxtIcon} alt="next-icon" />
							</div>
						</div>
						<h3>Follow Us on</h3>
						<a href="#!">
							<img className='social-media' src={socialMedia} alt="" />
						</a>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="container">
					<p>© Rezilla – All rights reserved</p>
					<ul>
						<li>
							<a href="#!">Terms and Conditions</a>
						</li>
						<li>
							<a href="#!">Privacy Policy</a>
						</li>
						<li>
							<a href="#!">Disclaimer</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Footer