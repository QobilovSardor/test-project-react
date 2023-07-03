import React from 'react'
import searchIcon from '../images/search-icon.svg';
import homeIcon from '../images/home-icon.svg';
import bedIcon from '../images/bed-icon.svg';

function Services() {
	return (
		<div className='services-sec'>
			<div className="container">
				<div className="title">
					<h4>OUR SERVICES</h4>
					<h2 className='title-text-xl'>Donec porttitor euismod dignissim</h2>
				</div>

				<div className="cards">
					<div className="services-card">
						<div className="services-icon">
							<img src={searchIcon} alt="" />
						</div>
						<h5>Buy a New Home</h5>
						<p>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
					</div>
					<div className="services-card">
						<div className="services-icon">
							<img src={homeIcon} alt="" />
						</div>
						<h5>Buy a New Home</h5>
						<p>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
					</div>
					<div className="services-card">
						<div className="services-icon">
							<img src={bedIcon} alt="" />
						</div>
						<h5>Buy a New Home</h5>
						<p>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services