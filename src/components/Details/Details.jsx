import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

function Details( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );

    const dispatch = useDispatch();

    return(
        <div>
            <h1>Details</h1>
        </div>
    )
}

export default Details;