import './Testimonials.css';

// Components Import
import HeadingText from '../HeadingText/HeadingText';
import Card from '../../UI/Card';

// Data Import
import { testimonials } from '../../data/Data';

// Swiper Import
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <HeadingText title={'Client'} titlePrimary={'Reviews'} />
      <div className="container testimonials-container">
        <Swiper
          className="testimonials-wrapper"
          slidesPerView={1}
          spaceBetween={10}
        >
          {testimonials.map(({ id, img, name, des }) => {
            return (
              <SwiperSlide key={id}>
                <Card classname={'testimonial'}>
                  <img src={img} alt="" />
                  <h5>{name}</h5>
                  <p>{des}</p>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
