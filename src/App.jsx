import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import Header from './components/Header'
import MainContent from './components/MainContent'
import { loadMovies} from './actions'
//import {searchMoviesWatcher} from './saga/searchSaga'

import './App.css'


function App() {
  const [hasMore,sethasMore] = useState(true)
  const [searchParams,setSearchParams] = useState({flag:false,text:''})
//const [dataArray,setDataArray]=useState([])
const dispatch = useDispatch()
const movies = useSelector((state)=>state.movies)
const error = useSelector((state)=>state.error)
const page=useSelector((state)=>state.nextPage)
const isLoading=useSelector(state=>state.isLoading)
const searchHandler = (text)=>{
  setSearchParams({flag:true,text})
}
const onBackClick=()=>{
  setSearchParams({flag:false,text:''})
}
useEffect(() => {
  const handleScroll = () => {
    if (
      Math.floor(window.innerHeight + document.documentElement.scrollTop) ===
      document.documentElement.offsetHeight
    ) {
      if (!isLoading && hasMore) {
        dispatch(loadMovies())
        if(page>=3){
          sethasMore(false)
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [isLoading, hasMore,page]);

  useEffect(()=>{
    dispatch(loadMovies())
  },[])
  
  return(
    <div className='main'>
      <Header title={movies.title} searchHandler={searchHandler}onBackClick={onBackClick}/>
      <MainContent dataArray={movies.moviesArray}searchParams={searchParams}/>
      {error &&<div>Some error occured</div>}
    </div>
  )
}

export default App
