import React from 'react';
import './portfolio.css';
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";

import { UilAngleLeft } from '@iconscout/react-unicons'
import { UilAngleRight } from '@iconscout/react-unicons'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { UilArrowRight } from '@iconscout/react-unicons';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Portfolio data
const portfolioData = [
  {
    id: 1,
    image: portfolio1,
    title: "Modern Websites",
    description: "Responsive websites adaptable to all devices, with UI components and animated interactions.",
    demoLink: "#"
  },
  {
    id: 2,
    image: portfolio2,
    title: "Brand Design",
    description: "Creative branding solutions with a focus on user experience and impactful designs.",
    demoLink: "#"
  },
  {
    id: 3,
    image: portfolio3,
    title: "Online Store",
    description: "E-commerce websites built with performance, scalability, and design in mind.",
    demoLink: "#"
  }
];
const Portfolio = () => {
  return (
    <section className="portfolio_section section" id="portfolio">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">Check out my projects.</span>

      <div className="portfolio_container container">
        <Swiper
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"      
        >
          {portfolioData.map(({ id, image, title, description, demoLink }) => (
            <SwiperSlide key={id} className="portfolio_content">
              <img src={image} alt={title} className="portfolio_image" />
              <div className="portfolio_data">
                <h3 className="portfolio_title">{title}</h3>
                <p className="portfolio_description">{description}</p>
                <a href={demoLink} className="button button--s portfolio_button">
                  Demo
                  <UilArrowRight className="button_icon" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;


