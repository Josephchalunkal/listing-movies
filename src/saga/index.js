import {all} from 'redux-saga/effects'

import {loadMoviesWatcher} from './moviesSaga'
export default function* rootSaga(){
    yield all([
        
        loadMoviesWatcher()
    ])
}
