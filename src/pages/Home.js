import React, { useState, useEffect, useContext } from 'react';
import { postElement } from '../apiCalls/apiCalls';
import Card from '../components/Card/Card';
import FilterNav from '../components/FilterNav/FilterNav';
import { MoviesContext } from '../contextProviders/MoviesProvider';

const Home = ([]) => {
    const [state, dispatch] = useContext(MoviesContext);

    const MoviesEndpoint = 'http://localhost:5000/movies';

    const getMoviesInfo = postElement

    useEffect(() => {
        console.log('HFDFH')
        getMoviesInfo(
            { akelab: 123456789 },
            'SHOW_MOVIES',
            MoviesEndpoint,
            dispatch,
        )();
    }, [0]);
    console.log(state)
    return (
        <div>
            <FilterNav genres={state.movies.genres}/>
            {state.movies.results.map(movie =>{
                console.log(movie)
            return (
                <Card
                    title={movie.original_title}
                    img={movie.poster_path}
                    description={movie.overview}
                    rating={movie.vote_average}
                    genre={movie.genre_ids}
                    date={movie.release_date}
                    genres={state.movies.genres}
                />)
            )}}
        </div>
    );
}

export default Home;
