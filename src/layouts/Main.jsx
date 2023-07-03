import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
import sliderImg1 from '../images/slider-img1.png'
import settingsIcon from '../images/settings-icon.svg'
import searchIcon from '../images/search-icon.svg'
import usersImg from '../images/users.png';
import usersImg1 from '../images/user1.png';
import googleImg from '../images/google-icon.svg';
import amazonImg from '../images/amazon-icon.svg';
import logitechImg from '../images/logitech-icon.svg';
import sporifyImg from '../images/spotify-icon.svg';
import samsungImg from '../images/samsung-icon.svg';
import netflixImg from '../images/netflix-icon.svg';

function Main() {
	const [ToggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	const getActiveClass = (index, className) =>
		ToggleState === index ? className : "";

	return (
		<>
			<div className='main'>
				<div className="container">
					<div className="main-left main-box">
						<h4 className="blue-title">REAL ESTATE</h4>
						<h2 className="title-text-xl">Find a perfect home you love..!</h2>
						<p className="title-paragrph">Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.</p>

						<div className='main-slider'>
							<Swiper
								slidesPerView={1}
								spaceBetween={30}
								keyboard={{
									enabled: true,
								}}
								pagination={{
									clickable: true,
								}}
								navigation={true}
								modules={[Keyboard, Pagination, Navigation]}
								className="mySwiper"
							>
								<SwiperSlide>
									<img src={sliderImg1} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={sliderImg1} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={sliderImg1} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={sliderImg1} alt="" />
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
					<div className="main-tab">
						<div className="tab-header">
							<a href="#!" className={`tabs ${getActiveClass(1, "active-tabs")}`}
								onClick={() => toggleTab(1)}>For Sale</a>
							<a href="#!" className={`tabs ${getActiveClass(2, "active-tabs")}`}
								onClick={() => toggleTab(2)}>For Rent</a>
						</div>
						<div className={`tab-content content ${getActiveClass(1, "active-content")}`}>
							<input type="text" placeholder="New York, San Francisco, etc" />
							<select name="" id="">
								<option value="">Select Property Type</option>
								<option value="">Value 1</option>
								<option value="">Value 1</option>
							</select>
							<select name="" id="">
								<option value="">Select Rooms</option>
								<option value="">Value 1</option>
								<option value="">Value 1</option>
							</select>
							<div className="advance-search__box">
								<img src={settingsIcon} alt="settings-icon" />
								<p>Advance Search</p>
							</div>
							<button className="seach-btn">
								<img src={searchIcon} alt="search-icon" />
								<p>Search</p>
							</button>
						</div>
						<div className={`tab-content content ${getActiveClass(2, "active-content")}`}>
							<input type="text" placeholder="New York, San Francisco, etc" />
							<select name="" id="">
								<option value="">Value 1</option>
								<option value="">Value 1</option>
								<option value="">Value 1</option>
							</select>
							<div className="advance-search__box">
								<img src={settingsIcon} alt="settings-icon" />
								<p>Advance Search</p>
							</div>
							<button className="seach-btn">
								<img src={searchIcon} alt="search-icon" />
								<p>Search</p>
							</button>
						</div>
					</div>

				</div>
				<div className="customers">
					<div className="customers-box">
						<img src={usersImg} alt="users" />
						<p>72k+ Happy <br /> Customers</p>
					</div>
					<div className="customers-box">
						<img src={usersImg1} alt="users" />
						<p>200+ New <br /> Listings Everyday!</p>
					</div>
				</div>
			</div>

			<div className="parnies">
				<div className="container">
					<p>Trusted by 100+ Companies across the globe! </p>
					<div className="parnies-img">
						<a href="#!">
							<img src={googleImg} alt="google-img" />
						</a>
						<a href="#!">
							<img src={amazonImg} alt="google-img" />
						</a>
						<a href="#!">
							<img src={logitechImg} alt="google-img" />
						</a>
						<a href="#!">
							<img src={sporifyImg} alt="google-img" />
						</a>
						<a href="#!">
							<img src={samsungImg} alt="google-img" />
						</a>
						<a href="#!">
							<img src={netflixImg} alt="google-img" />
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Main