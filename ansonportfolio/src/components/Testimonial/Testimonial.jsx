import React from 'react';
import { UilStar } from '@iconscout/react-unicons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonial.css';

import { Pagination } from 'swiper/modules';

// Testimonial images
import testimonial1 from "../../assets/testimonial1.jpg";
import testimonial2 from "../../assets/testimonial2.jpg";
import testimonial3 from "../../assets/testimonial3.jpg";

const testimonials = [
    {
        name: "Jane Roe",
        role: "Client",
        image: testimonial3,
        description: "Professional, reliable, and truly dedicated to delivering the best results.",
        rating: 5
    },
    {
        name: "Sara Smith",
        role: "Client",
        image: testimonial1,
        description: "I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.",
        rating: 5
    },
    {
        name: "John Doe",
        role: "Client",
        image: testimonial2,
        description: "Amazing work! Everything was delivered on time and the quality exceeded my expectations.",
        rating: 4
    },
    {
        name: "Jane Roe",
        role: "Client",
        image: testimonial3,
        description: "Professional, reliable, and truly dedicated to delivering the best results.",
        rating: 5
    }
];

const Testimonial = () => {
    return (
        <section className="testimonial section" id="testimonial">
            <h2 className="section__title">Testimonials</h2>
            <p className="section__subtitle">What others say about me.</p>

            {/* Swiper Container for Testimonials */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="testimonial_swiper"
                breakpoints={{
                    1024: {
                        slidesPerView: 2,  // Show 2 slides for larger screens
                    },
                    1400: {
                        slidesPerView: 3,  // Show 3 slides for very large screens
                    },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="testimonial_slide">
                        <div className="testimonial_content">
                            <div className="testimonial_data">
                                <div className="testimonial_header">
                                    <img src={testimonial.image} alt={`Testimonial from ${testimonial.name}`} className="testimonial_img" />
                                    <div>
                                        <h3 className="testimonial_name">{testimonial.name}</h3>
                                        <span className="testimonial_client">{testimonial.role}</span>
                                    </div>
                                </div>
                                <div>
                                    {Array.from({ length: testimonial.rating }, (_, i) => (
                                        <UilStar key={i} className="testimonial_icon" />
                                    ))}
                                </div>
                            </div>
                            <p className="testimonial_description">{testimonial.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonial;
