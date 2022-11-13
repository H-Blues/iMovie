# iMovie - Find You Like

Creator: Zihan Zhang

## Overiew

iMovie is a react application used TMDB APIs, and "i" sounds like "love" in Chinese.

This project is the continuous assignment of module "Web App Development 2" in South East Technological University. Thanks for my lecturer: Rosanne Birney. Her instuction inspired me a lot during my react learning.

### Features

- New react-context file: [menuContext](https://github.com/H-Blues/iMovie/blob/develop/src/contexts/menuContext.jsx)
- A new header with menu and a simple footer
- [Glassmorphism CSS Style](#glassmorphism)
- [Swiper component](#swiper)
- YouTuBe videos links
- Default images if fetching fails
- Pagination and Sorting (by name + by time)
- FavoriteIcon presentation optimization
- Full caching support (useQuery / [useQueries](#useQueries))
- Responsive UI
- New and updated views:
  - Movie raleted pages (3 list + 1 detail)
  - TV related pages (1 list + 1 detail)
  - People related pages (1 list + 1 detail)
  - Account favorite movies page
- New Material UI components
  - [Avator](https://mui.com/material-ui/react-avatar/)
  - [Chip](https://mui.com/material-ui/api/chip/)
  - [Custom Rating](https://mui.com/material-ui/react-rating/)
  - [Menu](https://mui.com/material-ui/react-menu/)

## Setup Requirements

I used `npm` to manage packages in this project, and uploaded the `package.json` file. Enter `npm install` to install all the dependencies demanded. If you already have a react-app, please enter the commands as follows and install these packages:

1. Material UI - `npm install @mui/material @emotion/react @emotion/styled`
2. React Router - `npm install react-router-dom`
3. React Query - `npm install react-query`
4. Swiper JS - `npm install swiper`

After installing all packages, use `npm start` to run this project.

Open http://localhost:3000 to view it in your browser.

Notice: API Key is necessary to run successfully. A file `.env` in root folder should be created by custom. The content in the file is like:

```
REACT_APP_TMDB_KEY = <<Your_TMDB_API>>
FAST_REFRESH = false
```

## API Endpoints

In this project, [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) is used to get necessary data. Here is the list of API endpoints that used in this project.

- Movies
  - Movie details - /movie/{movie_id}
  - Movie credits - /movie/{movie_id}/credits
  - Popular movie list - /movie/popular
  - Top rated movie list - /movie/top_rated
  - Upcoming movie list -
    /movie/upcoming
- TV
  - TV details - /tv/{tv_id}
  - TV credits - /tv/{tv_id}/credits
  - Popular TV list - /tv/popular
- People
  - People details - /person/{person_id}
  - Popular people list - /person/popular
- Genres
  - Movie genres - /genre/movie/list
  - TV genres - /genre/tv/list

## Routing

- / - display the home page
- /movie - display all popular movies
- /movie/:id - display a particular movie
- /movie/upcoming - display all upcoming movies
- /movie/top-rated - display all top-ratd movies
- /tv - display all popular TV series
- /tv/:id - display a particular TV series
- /people - display all popular people
- /people/:id - display a particular person
- /account/favourite - display the favorurite movies of the user

## Independent Learning

### <h3 id="glassmorphism"> Glassmorphism </h3>

Essentially, the main aspect of glassmorphism is a semi-transparent background, with a sublime shadow and border. This is an example image.

![glasmorphismEg](https://www.freecodecamp.org/news/content/images/2022/04/2022-04-01--19--1.png)

Glassmorphism is used in homepage, you can check the code in [`movieBackdrop`](https://github.com/H-Blues/iMovie/blob/develop/src/components/movieBackdrop/index.jsx) file, it's in `src/components/movieBackdrop/`.

I get some help from CodePen https://codepen.io/ and this is a blog introduces glassmorphism: https://www.freecodecamp.org/news/glassmorphism-how-to-create-a-glass-card-in-figma/

### <h3 id="swiper"> Swiper </h3>

Swiper - the most modern mobile touch slider. This is its website: https://swiperjs.com/.

I used `Swiper` in homepage and myfavorite page. You can check the code in [`movieList`](https://github.com/H-Blues/iMovie/blob/src/components/movieList/index.jsx) file, it's in `src/components/movieList/`.

### <h3 id="useQueries"> useQueries </h3>

React Query - Performant and powerful data synchronization for React.

Fetch, cache and update data in your React and React Native applications all without touching any "global state". This is its website: https://react-query-v3.tanstack.com/

The `useQueries` hook can be used to fetch a variable number of queries. I used it in homepage. Here is the part of codes:

```
const results = useQueries([
  { queryKey: ['popularMovies1', { page: 1 }], queryFn: getPopularMovies },
  { queryKey: ['topRatedMovies1', { page: 1 }], queryFn: getTopRatedMovies },
  { queryKey: ['upComingMovies1', { page: 1 }], queryFn: getUpcoming },
  { queryKey: ['popularTV1', { page: 1 }], queryFn: getPopularTV },
]);
```
