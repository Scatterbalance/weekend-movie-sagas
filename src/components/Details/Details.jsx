import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

function Details( props ){
   const details = useSelector( store => store.details );
    // const [name, setName] = useState( null );

    const dispatch = useDispatch();

    return(
        <div>
            <h1>Details</h1>
            <img src={details[0].poster} alt={details[0].title}/>

            <p>Name: {details[0].title}</p>
            <p>Description: {details[0].description}</p>
            <p>Genre: {details.map(detail =>{
                return (
                    <div key = {detail.id}>
                    <li>{detail.name}</li>
                    </div>
                )
            })}</p>

        </div>
    )
}

export default Details;