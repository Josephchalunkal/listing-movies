import PropTypes from 'prop-types';
import { Grid } from '@mui/material'
import './MainContent.css'

function MainContent({dataArray,searchParams}) {
  
const searchArray = dataArray.filter((item)=>item.name.toLowerCase().includes(searchParams.text.toLowerCase()))

 if(searchParams?.flag===true &&searchArray.length===0){
  return(
    <div className='no-movies'>
      <h1>No Movies</h1></div>
  )
 }
  return (
   <div className='mainContent'>
      <Grid container spacing={2}>
  {searchParams?.flag===true?searchArray?.map((item)=>{
    return(<>

    <Grid item xs={6}sm={4} key={Math.random()*1000000}>

    <img src={item.posterImage}/>
    <p>{item.name}</p>
    </Grid>
    </>)
  }):dataArray?.map((item)=>{
    return(<>

    <Grid item xs={6}sm={4} key={Math.random()*1000000}>

    <img src={item.posterImage}/>
    <p>{item.name}</p>
    </Grid>
    </>)
  })}
  </Grid>
  </div>
  )
}
MainContent.propTypes = {
  dataArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchParams:PropTypes.object.isRequired
}

export default MainContent