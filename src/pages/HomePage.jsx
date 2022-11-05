import React from 'react';
import MovieBackdrop from '../components/movieBackdrop';
import MovieList from '../components/movieList';
import Spinner from '../components/spinner';
import { getMovies, getUpcoming, getTV } from '../api/tmdbApi';
import { useQueries } from 'react-query';

const HomePage = () => {
  const results = useQueries([
    { queryKey: ['movies', 1], queryFn: getMovies },
    { queryKey: ['upcoming', 2], queryFn: getUpcoming },
    { queryKey: ['tv', 3], queryFn: getTV },
  ]);

  if (results[0].isLoading || results[1].isLoading || results[2].isLoading) {
    return <Spinner />;
  }

  if (results[0].isError || results[1].isError || results[2].isError) {
    return <h1>{results[0].error}</h1>;
  }

  const trendingMovies = results[0].data.results;
  const upcomingMovies = results[1].data.results;
  const trendingTV = results[2].data.results;

  return (
    <>
      <MovieBackdrop />
      <MovieList movies={trendingMovies} />
      <MovieList movies={upcomingMovies} />
      <MovieList movies={trendingTV} />
    </>
  );
};

export default HomePage;
