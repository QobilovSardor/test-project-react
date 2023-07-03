import React from 'react'
import areaImg1 from '../images/area-box1.png'
import areaImg2 from '../images/area-box2.png'
import areaImg3 from '../images/area-box3.png'
import areaImg4 from '../images/area-box4.png'
import areaImg5 from '../images/area-box5.png'

function Areas() {
	return (
		<div className='area-sec'>
			<div className="container">
				<div className="title">
					<h4 className='blue-title'>AREAS ACROSS THE TOWN</h4>
					<h2 className='title-text'>Neighborhood Properties</h2>
				</div>

				<div className='area-cards'>
					<div className="area-box">
						<img src={areaImg1} alt="area-img1" />
						<div className="area-box__info">
							<h4>216</h4>
							<p>New York City, NY</p>
						</div>
					</div>
					<div className="area-box">
						<img src={areaImg4} alt="area-img1" />
						<div className="area-box__info">
							<h4>141</h4>
							<p>Houston, TX</p>
						</div>
					</div>
					<div className="area-box">
						<img src={areaImg3} alt="area-img1" />
						<div className="area-box__info">
							<h4>212</h4>
							<p>San Diego, CA</p>
						</div>
					</div>
					<div className="area-box">
						<img src={areaImg5} alt="area-img1" />
						<div className="area-box__info">
							<h4>212</h4>
							<p>San Diego, CA</p>
						</div>
					</div>
					<div className="area-box">
						<img src={areaImg2} alt="area-img1" />
						<div className="area-box__info">
							<h4>212</h4>
							<p>San Diego, CA</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Areas