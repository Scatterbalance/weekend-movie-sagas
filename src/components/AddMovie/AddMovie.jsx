import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {Button, Box, MenuItem, InputLabel, FormControl, Select, Grid} from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


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
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
            <Grid item xs={12}>

            <h4>Title: <input type = "text" placeholder = "Title" onChange = { (event)=>handleChangeTitle(event)} /></h4>
            <h4>Poster URL: <input type = "text" placeholder = "Poster url" onChange = { (event)=>handleChangePoster(event)} /></h4>
            <h4>Description: <input type = "text" placeholder = "Description" onChange = { (event)=>handleChangeDescription(event)} /></h4>
            </Grid>

            <Grid item xs={5}>
            </Grid>
            <Grid item xs={2}>
              
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
          </Grid>
          
          <Grid item xs={12}>
          <Button component={RouterLink} to="/" variant="outlined">Cancel</Button>
          </Grid>
          <Grid item xs={12}>
        
          <Button  
          component={RouterLink} to="/"
          onClick = {()=>{dispatch({type:'SEND_MOVIE', payload: newMovie})}}
          variant="outlined">Submit</Button>
         

          
          </Grid>
          </Grid>
        </Box>
        
       

        </div>
    )
}

export default AddMovie;