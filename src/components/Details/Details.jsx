import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';

function Details( props ){


   const details = useSelector( store => store.details );
   const movies = useSelector( store => store.movies );
    // const [name, setName] = useState( null );



    const dispatch = useDispatch();
   

        
    

   

    return(
        <div>
            <h1>Details</h1>
            <Link to = '/'>
            <button>Back to home</button>
            </Link>
            <section> 
    
            
            <img src={movies[0].poster} alt={movies.title}/>

            <h1>{movies[0].title}</h1>
            <p>Description: {movies[0].description}</p>
            </section>
            <div>

                <p>
                    Genre:
                     {details.map(detail =>{
                return (
                    <li key = {detail.id}>{detail.name}</li>
                    
                )
            })}</p>

           
            </div>

        </div>
    )
}

export default Details;