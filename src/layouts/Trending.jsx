import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import houseImg from '../images/house2.2.png'
import nextIcon from '../images/next-icon.svg'
import { Keyboard, Pagination, Navigation } from "swiper/modules";

function Trending() {
	return (
		<div className='trending'>
			<div className="container">
				<div className="title">
					<h4>WHAT’S TRENDING</h4>
					<h2>Latest Blogs & Posts</h2>
				</div>

				<div className="trending-slider">
					<Swiper
						slidesPerView={3}
						spaceBetween={50}
						keyboard={{
							enabled: true,
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Keyboard, Pagination, Navigation]}
						breakpoints={{
							// when window width is >= 640px
							640: {
								width: 640,
								slidesPerView: 1,
							},
							// when window width is >= 768px
							768: {
								width: 768,
								slidesPerView: 2,
							},
						}}
						className="mySwiper"
					>
						<SwiperSlide>
							<div className="img-box">
								<img src={houseImg} alt="" />
								<div className="calendar">
									<p>28</p>
									<span>Tue</span>
								</div>
							</div>
							<div className="slider-info">
								<h3>Top 10 Home Buying Mistakes to Avoid</h3>
								<p>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
								<a href='#!' className='next-icon'>
									<img src={nextIcon} alt="" />
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="img-box">
								<img src={houseImg} alt="" />
								<div className="calendar">
									<p>28</p>
									<span>Tue</span>
								</div>
							</div>
							<div className="slider-info">
								<h3>Top 10 Home Buying Mistakes to Avoid</h3>
								<p>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
								<a href='#!' className='next-icon'>
									<img src={nextIcon} alt="" />
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="img-box">
								<img src={houseImg} alt="" />
								<div className="calendar">
									<p>28</p>
									<span>Tue</span>
								</div>
							</div>
							<div className="slider-info">
								<h3>Top 10 Home Buying Mistakes to Avoid</h3>
								<p>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
								<a href='#!' className='next-icon'>
									<img src={nextIcon} alt="" />
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="img-box">
								<img src={houseImg} alt="" />
								<div className="calendar">
									<p>28</p>
									<span>Tue</span>
								</div>
							</div>
							<div className="slider-info">
								<h3>Top 10 Home Buying Mistakes to Avoid</h3>
								<p>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
								<a href='#!' className='next-icon'>
									<img src={nextIcon} alt="" />
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="img-box">
								<img src={houseImg} alt="" />
								<div className="calendar">
									<p>28</p>
									<span>Tue</span>
								</div>
							</div>
							<div className="slider-info">
								<h3>Top 10 Home Buying Mistakes to Avoid</h3>
								<p>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
								<a href='#!' className='next-icon'>
									<img src={nextIcon} alt="" />
								</a>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="media-tending">
					<div className="flex-box">
						<div className="wrapper-box">
							<div className="img-box">
								<img src={houseImg} alt="" />
								<div className="calendar">
									<p>28</p>
									<span>Tue</span>
								</div>
							</div>
							<div className="slider-info">
								<h3>Top 10 Home Buying Mistakes to Avoid</h3>
								<p>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
							</div>
						</div>
						<div className="wrapper-box">
							<div className="img-box">
								<img src={houseImg} alt="" />
								<div className="calendar">
									<p>28</p>
									<span>Tue</span>
								</div>
							</div>
							<div className="slider-info">
								<h3>Top 10 Home Buying Mistakes to Avoid</h3>
								<p>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
							</div>
						</div>
						<div className="wrapper-box">
							<div className="img-box">
								<img src={houseImg} alt="" />
								<div className="calendar">
									<p>28</p>
									<span>Tue</span>
								</div>
							</div>
							<div className="slider-info">
								<h3>Top 10 Home Buying Mistakes to Avoid</h3>
								<p>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='media-btn'>
				<a href="#!">View more blogs</a>
			</div>
		</div>
	)
}

export default Trending