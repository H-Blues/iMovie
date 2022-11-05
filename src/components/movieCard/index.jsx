import React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ffcc33',
  },
});

const MovieCard = ({ movie }) => {
  const movieImg = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <>
      <div className="movie-card" style={{ width: 'fit-content' }}>
        <img
          src={movieImg}
          style={{
            maxWidth: '100%',
            maxHeight: 'auto',
            borderRadius: '20px',
          }}
        />
        <Typography
          gutterBottom
          variant="h6"
          component="p"
          sx={{ maxWidth: '80%' }}>
          {movie.title}
        </Typography>
        <Typography variant="body" color="text" sx={{ maxWidth: '50%' }}>
          {movie.release_date}
        </Typography>
        <StyledRating
          defaultValue={movie.vote_average / 2}
          precision={0.5}
          readOnly
          icon={<ThumbUpAltIcon fontSize="inherit" />}
          emptyIcon={<ThumbUpOffAltIcon fontSize="inherit" />}
          sx={{
            margin: '-2% 5%',
            float: 'right',
            maxWidth: '35%',
            display: { xs: 'none', md: 'flex' },
          }}
        />
      </div>
    </>
  );
};

export default MovieCard;
