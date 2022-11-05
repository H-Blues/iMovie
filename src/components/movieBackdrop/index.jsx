import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import './index.css';
import { Box } from '@mui/material';

const MovieBackdrop = () => {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Swiper
          className="movieBackdrop"
          modules={[Autoplay]}
          spaceBetween={100}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}>
          <SwiperSlide className="single-film">
            <div
              className="single-film-box"
              style={{
                backgroundImage:
                  "url('https://www.themoviedb.org/t/p/original/kkasrgvyhb0sW45FUKb4poWBrfr.jpg')",
              }}>
              <div className="glassbox">
                <img
                  src="https://www.themoviedb.org/t/p/original/1seIJ8wIKo3KXp7hnwS5wj69U8M.jpg"
                  width="20%"
                  height="auto"></img>
                <p>some Description</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-film">
            <div
              className="single-film-box"
              style={{
                backgroundImage:
                  "url('https://www.themoviedb.org/t/p/original/6Ys6koNajP5ld9EIMfOSQrRquki.jpg')",
              }}>
              <div className="glassbox">
                <p>some Description</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-film">
            <div
              className="single-film-box"
              style={{
                backgroundImage:
                  "url('https://www.themoviedb.org/t/p/original/qvXMeKlpTA5FarDL2PHHkgxCZAD.jpg')",
              }}>
              <div className="glassbox">
                <img
                  src="https://www.themoviedb.org/t/p/original/tkJfnCynZC7lmNouKJ53w9n72sf.jpg"
                  width="25%"
                  height="auto"></img>
                <p>some Description</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-film">
            <div
              className="single-film-box"
              style={{
                backgroundImage:
                  "url('https://www.themoviedb.org/t/p/original/o1k6zNKYVQuNx5DIyVpT9j6gwaQ.jpg')",
              }}>
              <div className="glassbox">
                <img
                  src="https://www.themoviedb.org/t/p/original/3R3dopFTwneJVPW3ubcrnoPfI05.jpg"
                  width="25%"
                  height="auto"></img>
                <p>some Description</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default MovieBackdrop;
