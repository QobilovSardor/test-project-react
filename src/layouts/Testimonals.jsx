import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import lineImg from '../images/line.svg'
import userImg from '../images/user-icon2.svg'
import starIcon from '../images/stars-icon.svg'

function Testimonals() {
	return (
		<div className='testimonals'>
			<div className="container">
				<div className="title">
					<h4 className='blue-title'>TESTIMONIALS</h4>
					<h2 className='title-text'>Look What Our Customers Say!</h2>
					<p>Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.</p>
				</div>

				<div className="slider-box">
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						mousewheel={true}
						direction="vertical"
						keyboard={{
							enabled: true,
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Keyboard, Pagination, Navigation]}
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
		</div>
	)
}

export default Testimonals