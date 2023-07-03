import React from 'react'
import teamImg1 from '../images/team-img1.png'
import teamImg2 from '../images/team-img2.png'
import teamImg3 from '../images/team-img3.png'
import teamImg4 from '../images/team-img4.png'

function Team() {
	return (
		<div className='our-team'>
			<div className="container">
				<div className="title">
					<h4 className='blue-title'>Introduce yourself to </h4>
					<h2 className='title-text'>Our Team of Experts</h2>
				</div>

				<div className="our-team__cards">
					<div className="team-card">
						<img src={teamImg1} alt="" />
						<div className="team-info">
							<h5>Brendon M</h5>
							<p>CEO & Founder</p>
						</div>
					</div>
					<div className="team-card">
						<img src={teamImg2} alt="" />
						<div className="team-info">
							<h5>Jodi J. Appleby</h5>
							<p>Real Estate Developer</p>
						</div>
					</div>
					<div className="team-card">
						<img src={teamImg3} alt="" />
						<div className="team-info">
							<h5>Justin S. Meza</h5>
							<p>Listing Agent</p>
						</div>
					</div>
					<div className="team-card">
						<img src={teamImg4} alt="" />
						<div className="team-info">
							<h5>Susan T. Smith</h5>
							<p>Buyer's Agent</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Team