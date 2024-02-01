import { getAlldata } from '../apis/api'
import {useQuery} from '@tanstack/react-query'
import { useNavigate } from "react-router-dom";
import './home.css'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


     
const Home =({setMovieid}) => {
    const navigate = useNavigate();
    const {data , isLoading } = useQuery({
        queryKey:['movieall2'],
        queryFn: getAlldata,
        refetchOnWindowFocus:false
    })
    const[dataid , setdataid] = useState('')
    
    
 
    const handleClick = () => { 
       Detailpage()
    }

    const Detailpage = () =>{
    navigate("/moviedetail")
    }

    if(isLoading){
         
     return (
    <div style={{fontSize:'30px', fontWeight:"bold", marginTop:"10rem", marginLeft:"10rem"}}>Loading..</div>
  )
    } 

return (    
    <div>

{ data.map((value) => (
    
      <div key={value.show.id} className='conntainer'>
        <div className={!value.show.image?.medium ?'img':'noimg' }>
            <img src={value.show.image?.medium}  alt='img'></img>
        </div>
        <div className='wrapper'>
        
            <div className='title'>
                <div>{value.show.name}</div>
            </div>
            <div className='genera'><div>{`${value.show.genres},`}</div></div>
            <div className='laguage'>{value.show.language}</div>
            { value.show.rating?.average ?
            <div className='rating'>rating:{value.show.rating?.average}👍</div>
            :<div className='rating'>rating:Null 🥲</div>
}
        </div>
        <div className='button-h'>

            <button className='btn'  onClick={() => { setMovieid(value.show.id), handleClick()}}>View</button></div>
        
    </div>
  

)) }




</div>

)
   
}



export default Home