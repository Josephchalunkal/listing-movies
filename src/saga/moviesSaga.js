import {takeEvery,put,select,call} from 'redux-saga/effects'
import { fetchMovies } from "../api";
import {loadMoviesSuccess,loadMoviesFailure,}from '../actions'
import {MOVIES} from '../constants'

const getPage=(state=>state.nextPage)



function* loadMoviesWorker(){
try{

    const page =yield select(getPage)
    const movies = yield call(fetchMovies,page)
    yield put(loadMoviesSuccess(movies))
}
catch(error){
yield put(loadMoviesFailure(error.toString()))
}
}

export  function* loadMoviesWatcher(){
    yield takeEvery(MOVIES.LOAD,loadMoviesWorker)
     

}
