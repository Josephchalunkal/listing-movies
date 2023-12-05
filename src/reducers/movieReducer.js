import { MOVIES } from "../constants"

const movieReducer = (state={title:'',moviesArray:[]},action)=>{
if(action.type === MOVIES.LOAD_SUCCESS){
    const movieArray = action.payload.page['content-items'].content.map((item)=>{
       return{
        name:item.name,
        posterImage:`https://test.create.diagnal.com/images/${item['poster-image'].replace('posterthatismissing.jpg','placeholder_for_missing_posters.png')}`
       }
    })
    return{
        ...state,
        title:action.payload.page.title,
        moviesArray:[...state.moviesArray,...movieArray]
    }
}
return state
}

export default movieReducer