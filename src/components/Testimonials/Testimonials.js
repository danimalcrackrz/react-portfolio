import React from "react"
import "./testimonials.css"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import testimonialData from "./testimonialData"

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='container testimonials__container'
      >
        {testimonialData.map(({ avatar, user, review }, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='client__avatar'>
                <img src={avatar} alt={user} />
              </div>
              <h5 className='client__name'>{user}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
