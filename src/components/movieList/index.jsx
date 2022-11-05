import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../movieCard';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper';

function MovieList({ movies }) {
  const [nameFilter, setNameFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('0');
  const genreId = Number(genreFilter);
  const navigate = useNavigate();

  const movieDetail = (movie) => {
    navigate('/movies/' + movie.id);
  };

  return (
    <>
      <Box
        component="span"
        className="movie-list"
        sx={{
          maxWidth: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: { xs: 'none', md: 'flex' },
        }}>
        <Swiper
          slidesPerView={4.75}
          spaceBetween={10}
          scrollbar={{
            hide: true,
          }}
          loopFillGroupWithBlank={true}
          modules={[Scrollbar]}>
          {movies.map((m, i) => (
            <SwiperSlide key={i} onClick={() => movieDetail(m)}>
              <MovieCard key={m.id} movie={m} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box className="movie-list" sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Swiper
          slidesPerView={2.75}
          spaceBetween={8}
          scrollbar={{
            hide: true,
          }}
          loopFillGroupWithBlank={true}
          modules={[Scrollbar]}
          style={{ maxWidth: '90%' }}>
          {movies.map((m, i) => (
            <SwiperSlide key={i} onClick={() => movieDetail(m)}>
              <MovieCard key={m.id} movie={m} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
export default MovieList;
