import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";
import movieReducer from "./MovieReducer";
import pageReducer from "./pageReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    isLoading:loadingReducer,
    movies:movieReducer,
    error:errorReducer,
    nextPage:pageReducer,
    
})

export default rootReducer
