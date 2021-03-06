import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('FETCH_DETAILS', fetchMovie);
    yield takeEvery('SEND_MOVIE', addMovie);


}
function* addMovie(action) {
    // get details from the DB
    try {
        const detail = yield axios.post(`/api/movie/`, action.payload);
        console.log('post:', detail.data);
        yield put({ type: 'FETCH_MOVIES'});
       
    } catch {
        console.log('post error');
    }
        
}

function* fetchDetails(action) {
    // get details from the DB
    try {
        const detail = yield axios.get(`/api/movie/${action.payload.movie.id}`);
        console.log('get all details:', detail.data);
        yield put({ type: 'SET_DETAILS', payload: detail.data });
       
    } catch {
        console.log('get details error');
    }
        
}

function* fetchMovie(action) {
    // get details from the DB
    try {
        const movie = yield axios.get(`/api/movie/details/${action.payload.movie.id}`);
        console.log('get movie details:', movie.data);
        yield put({ type: 'SET_MOVIE', payload: movie.data });
       
    } catch {
        console.log('get details error');
    }
        
}




function* fetchAllGenres() {
    // get all Genres from the DB for dropdown
    try {
        const genre = yield axios.get('/api/genre');
        console.log('get all:', genre.data);
        yield put({ type: 'SET_GENRES', payload: genre.data });

    } catch {
        console.log('get all genres error');
    }
        
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all movies error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS': 
            return action.payload;
        default:
            return state;
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
            case 'SET_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
