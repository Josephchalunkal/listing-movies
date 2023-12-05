import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../saga'

const configureStore= ()=>{
    const sagaMiddleWare = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleWare))

    )
    sagaMiddleWare.run(rootSaga)
    return store
}

export default configureStore