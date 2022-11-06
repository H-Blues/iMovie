import React, { useState } from 'react';
import { getPopularMovies } from '../api/tmdbApi';
import { useQuery } from 'react-query';
import PageTemplate from '../components/movieListPage';
import Spinner from '../components/spinner';
import Pagination from '@mui/material/Pagination';

const PopularMoviePage = () => {
  let [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const { data, error, isLoading, isError } = useQuery(
    [`popularMovies${page}`, { page: page }],
    getPopularMovies
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  return (
    <>
      <PageTemplate title="Popular Movies" movies={movies} />
      <Pagination
        count={10}
        page={page}
        variant="outlined"
        size="large"
        onChange={handleChange}
        sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}
      />
    </>
  );
};
export default PopularMoviePage;
