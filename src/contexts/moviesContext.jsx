import React, { useState } from 'react';

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [movieFavorites, setMovieFavorites] = useState([]);
  const [tvFavorites, setTvFavorites] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToFavorites = (item, type) => {
    let newFavorites = [];
    if (type === 'movie') {
      if (!movieFavorites.includes(item.id)) {
        newFavorites = [...movieFavorites, item.id];
      } else {
        newFavorites = [...movieFavorites];
      }
      setMovieFavorites(newFavorites);
    } else if (type === 'tv') {
      if (!tvFavorites.includes(item.id)) {
        newFavorites = [...tvFavorites, item.id];
      } else {
        newFavorites = [...tvFavorites];
      }
      setTvFavorites(newFavorites);
    }
  };

  const removeFromFavorites = (item, type) => {
    if (type === 'movie') {
      setMovieFavorites(movieFavorites.filter((mId) => mId !== item.id));
    } else if (type === 'tv') {
      setTvFavorites(tvFavorites.filter((tId) => tId !== item.id));
    }
  };

  const addToPlaylist = (movie) => {
    let newToPlay = [];
    if (!playlist.includes(movie.id)) {
      newToPlay = [...playlist, movie.id];
    } else {
      newToPlay = [...playlist];
    }
    setPlaylist(newToPlay);
  };

  return (
    <MoviesContext.Provider
      value={{
        movieFavorites,
        tvFavorites,
        playlist,
        addToFavorites,
        removeFromFavorites,
        addToPlaylist,
      }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
