import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    

    return (
        <main> 
            <h1>MovieList</h1> 
            <Link to = "/AddMovie"><button>Add Movie</button></Link>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            
                            <Link to= "/Details" onClick = {()=>{dispatch({type:'FETCH_DETAILS', payload: {movie}})}}>
                            <img  src={movie.poster} alt={movie.title}/>
                            </Link>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;