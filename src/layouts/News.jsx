import React from 'react';

function News() {
	return (
		<div className='news-sec'>
			<div className="container">
				<div className="title">
					<div className='title-info'>
						<h4 className='blue-title'>CHECKOUT OUR NEW</h4>
						<h2 className='title-text'>Latest Listed Properties</h2>
						<p className='title-paragrph'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
					</div>
					<div className='selects-btn'>
						<button>All</button>
						<button className='active'>Sell</button>
						<button>Rent</button>
					</div>
				</div>


				<div className="slider-box">
					
				</div>
			</div>
		</div>
	)
}

export default News