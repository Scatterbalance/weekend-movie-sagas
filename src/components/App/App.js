import {HashRouter as Router, Route, useParams} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
    
  }, []);

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
        <Route path="/AddMovie" exact>
            <AddMovie />
        </Route>
        

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
