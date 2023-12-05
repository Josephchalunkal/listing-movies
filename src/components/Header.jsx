import { useState,useRef} from 'react';
import PropTypes from 'prop-types';
import './Header.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';


function Header({title,searchHandler,onBackClick}) {

  const [show,setShow] = useState(false)
  const textRef = useRef(null)
    const iconStyle = {
        width:'3rem',height:'3rem',fill:'#fff'
    }
const onSearch=()=>{
  setShow(true)

}
const submitHandler = ()=>{
  setShow(false)
  searchHandler(textRef.current.value)

}

  return (
    <div className='header-wrapper'>
        <div className='header-firstchild'>
            <IconButton onClick={onBackClick}>
            <ArrowBackIcon style={iconStyle}/>
            </IconButton>
        <div className='header-text'>{title}</div>
        </div>
        <div className='header-secondchild'>
            <IconButton onClick={onSearch}>
            <SearchIcon style = {iconStyle}/>   
            </IconButton>
        
        </div>
        {show&&<div> <input type= 'text' ref={textRef}/> <button onClick={submitHandler}> submit</button></div>} 
    </div>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    searchHandler:PropTypes.func.isRequired,
    onBackClick:PropTypes.func.isRequired
  }
export default Header