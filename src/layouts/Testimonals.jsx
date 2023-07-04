import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import lineImg from '../images/line.svg'
import userImg from '../images/user-icon2.svg'
import starIcon from '../images/stars-icon.svg'
import agentImg from '../images/agent-img.png'

function Testimonals() {
	return (
		<div className='testimonals'>
			<div className="container">
				<div className="testimonals-sliders">
					<div className="title-slider">
						<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
							<SwiperSlide>
								<div className="title">
									<h4 className='blue-title'>TESTIMONIALS</h4>
									<h2 className='title-text'>Look What Our Customers Say!</h2>
									<p>Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="title">
									<h4 className='blue-title'>TESTIMONIALS</h4>
									<h2 className='title-text'>Look What Our Customers Say!</h2>
									<p>Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="title">
									<h4 className='blue-title'>TESTIMONIALS</h4>
									<h2 className='title-text'>Look What Our Customers Say!</h2>
									<p>Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.</p>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>

					<div className="slider-box">
						<Swiper
							slidesPerView="1"
							mousewheel={true}
							direction="vertical"
							modules={[Pagination]}
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
							className="mySwiper"
						>
							<SwiperSlide>
								<div className="card-box">
									<img src={lineImg} alt="" />
									<p>I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!</p>
									<div className='line'></div>
									<div className="slider-box__footer">
										<div className="user-box">
											<img src={userImg} alt="" />
											<p>Barbara D. Smith</p>
										</div>
										<img src={starIcon} alt="" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="card-box">
									<img src={lineImg} alt="" />
									<p>I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!</p>
									<div className='line'></div>
									<div className="slider-box__footer">
										<div className="user-box">
											<img src={userImg} alt="" />
											<p>Barbara D. Smith</p>
										</div>
										<img src={starIcon} alt="" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="card-box">
									<img src={lineImg} alt="" />
									<p>I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!</p>
									<div className='line'></div>
									<div className="slider-box__footer">
										<div className="user-box">
											<img src={userImg} alt="" />
											<p>Barbara D. Smith</p>
										</div>
										<img src={starIcon} alt="" />
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>

				<div className="agent-sec">
					<div className="agent-img">
						<img src={agentImg} alt="" />
					</div>
					<div className="agent-info__box">
						<div className="agent-info">
							<h3>Become a Agent.</h3>
							<p>Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque. </p>
						</div>
						<a href="#!">Register Now</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonals