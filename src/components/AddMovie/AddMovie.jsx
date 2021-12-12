import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

function AddMovie( props ){
const genres = useSelector( store => store.genres );
    // const [name, setName] = useState( null );

    const dispatch = useDispatch();

    return(
        <div>
            <h1>AddMovie</h1>
            {genres.map(genre => {
                    return (
                        <div key={genre.id} >
                            <li>{genre.name}</li>
                           
                        </div>
                    );
                })}
        </div>
    )
}

export default AddMovie;