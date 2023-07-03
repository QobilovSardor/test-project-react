import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import newImg1 from '../images/news-img1.png'
import newImg2 from '../images/news-img2.png'
import newImg3 from '../images/news-img4.png'
import fireIcon from '../images/fire-icon.svg'
import homeIcon2 from '../images/home-2.svg'
import moneyIcon from '../images/money-icon.svg'
import bedIcon2 from '../images/bed-icon2.svg'
import bathroomIcon from '../images/bathroom-icon.svg'

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


			</div>
			<div className="slider-box">
				<Swiper
					slidesPerView={3.5}
					spaceBetween={50}
					slidesPerGroupSkip={1}
					pagination={{
						clickable: true,
					}}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="img-box">
							<img src={newImg1} alt="" />
							<div className="img-info img-info__one">
								<img src={fireIcon} alt="" />
								<p>Popular</p>
							</div>
						</div>
						<div className="info">
							<h4>$ 5,970</h4>
							<h6>Tranquil Haven in the Woods</h6>
							<p>103 Wright CourtBurien, WA 98168</p>
							<div className='icons'>
								<div className="icon-box">
									<img src={bedIcon2} alt="" />
									<p>4 Beds</p>
								</div>
								<div className="icon-box">
									<img src={bathroomIcon} alt="" />
									<p>3 Bath</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="img-box">
							<img src={newImg2} alt="" />
							<div className="img-info img-info__two">
								<img src={homeIcon2} alt="" />
								<p>Popular</p>
							</div>
						</div>
						<div className="info">
							<h4>$ 5,970</h4>
							<h6>Tranquil Haven in the Woods</h6>
							<p>103 Wright CourtBurien, WA 98168</p>
							<div className='icons'>
								<div className="icon-box">
									<img src={bedIcon2} alt="" />
									<p>4 Beds</p>
								</div>
								<div className="icon-box">
									<img src={bathroomIcon} alt="" />
									<p>3 Bath</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="img-box">
							<img src={newImg3} alt="" />
							<div className="img-info img-info__three">
								<img src={moneyIcon} alt="" />
								<p>Popular</p>
							</div>
						</div>
						<div className="info">
							<h4>$ 5,970</h4>
							<h6>Tranquil Haven in the Woods</h6>
							<p>103 Wright CourtBurien, WA 98168</p>
							<div className='icons'>
								<div className="icon-box">
									<img src={bedIcon2} alt="" />
									<p>4 Beds</p>
								</div>
								<div className="icon-box">
									<img src={bathroomIcon} alt="" />
									<p>3 Bath</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="img-box">
							<img src={newImg1} alt="" />
							<div className="img-info img-info__one">
								<img src={fireIcon} alt="" />
								<p>Popular</p>
							</div>
						</div>
						<div className="info">
							<h4>$ 5,970</h4>
							<h6>Tranquil Haven in the Woods</h6>
							<p>103 Wright CourtBurien, WA 98168</p>
							<div className='icons'>
								<div className="icon-box">
									<img src={bedIcon2} alt="" />
									<p>4 Beds</p>
								</div>
								<div className="icon-box">
									<img src={bathroomIcon} alt="" />
									<p>3 Bath</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="img-box">
							<img src={newImg1} alt="" />
							<div className="img-info img-info__one">
								<img src={fireIcon} alt="" />
								<p>Popular</p>
							</div>
						</div>
						<div className="info">
							<h4>$ 5,970</h4>
							<h6>Tranquil Haven in the Woods</h6>
							<p>103 Wright CourtBurien, WA 98168</p>
							<div className='icons'>
								<div className="icon-box">
									<img src={bedIcon2} alt="" />
									<p>4 Beds</p>
								</div>
								<div className="icon-box">
									<img src={bathroomIcon} alt="" />
									<p>3 Bath</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default News