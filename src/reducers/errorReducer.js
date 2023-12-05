import { MOVIES } from "../constants";

const errorReducer = (state=null,action)=>{
 switch(action.type){
    case MOVIES.LOAD_FAILURE:
        return action.payload;
    case MOVIES.LOAD_SUCCESS:
    case MOVIES.LOAD:
        return null;
    default:
    return state
 }
}

export default errorReducer
