import React from "react";
import './testimonials.css';
import AVTR1 from '../../assets/img/testimonial1.png'
import AVTR2 from '../../assets/img/testimonial2.png'
import AVTR3 from '../../assets/img/testimonial3.png'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
    return (
        <section id='testimonials'>
        <h5>Review from client</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
              // install Swiper modules
              modules={[Pagination, Navigation]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
                <div className="client__avatar">
                    <img src={AVTR1} alt="AVTR1" />
        </div>
                    <h5 className='client__name'>Tobias</h5>
                    <small className='client__review'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
                <div className="client__avatar">
                    <img src={AVTR2} alt="AVTR2" />
                </div>
                    <h5 className='client__name'>Sandra</h5>
                    <small className='client__review'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
                <div className="client__avatar">
                    <img src={AVTR3} alt="AVTR3" />
                </div>
                <h5 className='client__name'>Martina</h5>
                <small className='client__review'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</small>
        </SwiperSlide>
        </Swiper>

        </section>
    )
}

export default Testimonials
