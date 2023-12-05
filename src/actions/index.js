import {MOVIES} from '../constants'

const loadMovies = ()=>{
    return {
        type:MOVIES.LOAD,
    }
}

const loadMoviesSuccess = (movies)=>{
    return{
        type:MOVIES.LOAD_SUCCESS,
        payload:movies
    }
}

const loadMoviesFailure = (error)=>{
    return{
        type:MOVIES.LOAD_FAILURE,
        payload:error
    }
}
const onSearchMoviesWatcher = (data)=>{
    console.log('data',{
        type:MOVIES.MOVIE_SEARCH_WATCHER,
        payload:data
    })
    return{
        type:MOVIES.MOVIE_SEARCH_WATCHER,
        payload:data
    }
}



export{loadMovies,loadMoviesSuccess,loadMoviesFailure,onSearchMoviesWatcher}