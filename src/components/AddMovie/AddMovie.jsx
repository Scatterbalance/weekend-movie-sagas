import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {Button, Box, MenuItem, InputLabel, FormControl, Select} from '@material-ui/core';
import React from 'react';


function AddMovie( props ){
const genres = useSelector( store => store.genres );
    // const [name, setName] = useState( null );


    //dropdown menu Material UI
    useEffect(() => {
       setgenreList(
        genres.map(genre => {
        return (<MenuItem key = {genre.id} value = {genre.id}>{genre.name}</MenuItem>);
        }))}, []);
    

  //end material UI dropdown setup

    const dispatch = useDispatch();

    const [newMovie, setnewMovie] = useState( {
        title: '',
        description: '',
        poster: '',
        genre_id: '',
        } );
    
    const handleChangeTitle = (event)=>{
       setnewMovie ({...newMovie , title: event.target.value});
    }
    const handleChangePoster = (event)=>{
        setnewMovie ({...newMovie , poster: event.target.value});
     }
     const handleChangeDescription = (event)=>{
        setnewMovie ({...newMovie , description: event.target.value});

     }

     const handleChange = (event) => {
        setnewMovie({...newMovie, genre_id: event.target.value})
        
    };

    const [genreList, setgenreList] = useState('');


    console.log('newMovie:', newMovie);




    return(
        <div>
            <h1>AddMovie</h1>
            <input type = "text" placeholder = "Title" onChange = { (event)=>handleChangeTitle(event)} />
            <input type = "text" placeholder = "Poster url" onChange = { (event)=>handleChangePoster(event)} />
            <input type = "text" placeholder = "Description" onChange = { (event)=>handleChangeDescription(event)} />
            
       
            

      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Genre"
          value = {newMovie.genre_id}
          onChange={handleChange}>
            {genreList}
        </Select>
      </FormControl>
    </Box>

        </div>
    )
}

export default AddMovie;