import React from 'react'
import infoImg1 from '../images/info-img1.svg'
import infoImg2 from '../images/info-img2.svg'
import roundedImg from '../images/rounded-img.png';
import house1 from '../images/house.png'
import house2 from '../images/house2.2.png'
import house3 from '../images/house3.3.png'

function WhoAreWe() {
	return (
		<div className='who-are-we'>
			<div className="container">
				<div className="lef-box">
					<h4 className='blue-title'>WHO ARE WE</h4>
					<h2 className='title-text'>Assisting individuals in locating the appropriate real estate.</h2>
					<p className='title-paragrph'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
					<div className="info-box">
						<img src={infoImg1} alt="info-img-1" />
						<div className='info-box__text'>
							<h4>Donec porttitor euismod</h4>
							<p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
						</div>
					</div>
					<div className="info-box">
						<img src={infoImg2} alt="info-img-1" />
						<div className='info-box__text'>
							<h4>Donec porttitor euismod</h4>
							<p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
						</div>
					</div>
				</div>
				<div className="img-box">
					<div className='rounded-img'>
						<img src={roundedImg} alt="roundet-img" />
					</div>
					<img src={house1} alt="house-img1" />
					<div className='right-img'>
						<img className='mt' src={house2} alt="house-img1" />
						<img className='mt-2' src={house3} alt="house-img1" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhoAreWe