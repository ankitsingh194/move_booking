import {useQuery} from '@tanstack/react-query'
import { getAlldata } from '../apis/api'
import { useState } from 'react'
import './Moviedetail.css'


const Moviedetail = ({id}) => {
    const [clickbn , SetClickbtn] = useState(false)
    const {data , isLoading } = useQuery({
        queryKey:['movieall'],
        queryFn: getAlldata,
        refetchOnWindowFocus:false
    })
    

    const [userdata , Setuserdata] = useState({
      Name:"",
      Email:"",
      Phone:"",
      BookingDate:"",
      Numberoftickets:"",

    })





    const HandleSubmit =(e) => {
      const name = e.target.name;
      const value = e.target.value;
      
      Setuserdata((prev) => {
        return {...prev, [name]: value}
      }) 
      localStorage.setItem('Userinfo',JSON.stringify( userdata))
   
  }
  const HandleSubmitform =() => {
    SetClickbtn(false)
    alert("Your tickets has been booked Successfully")
 
     
    }

  



   //const HandleSubmitfrom = () => {
  //  SetClickbtn(true)
  //  return console.log("form is submited")
    
   //}
    

    
    if(isLoading){
    return (
    <div>Loading...</div>
  )
    }
    return(
  <div>
       { data.filter((item)=>{
            return item.show.id == id
          }).map((item) => (
             <div key='#' className='w-[80%] h-[170px] border-solid border-2 border-gray-700  m-[10px]'>
    
       
             <div className=' m-2 w-[120px] h-[120px]   border-solid border-2 border-gray-700 inline-block '>
             <div className='ml-[170px] mt-[-100px]'>
                <img src={item.show.image?.medium}></img>
               <p className='w-[200px] '>{item.show.name}</p>
               <p >genera: {item.show?.genres}</p>
               <p >language: {item.show?.language}</p>
               <p >premiered: {item.show?.premiered}</p>
               <p >Country: {item.show.network?.country?.name }</p>
               <p className='w-[200px] '>{item.show?.summary}</p>
               <button  onClick={() => SetClickbtn(true)}>Book tickets</button>
               </div>
               </div>
              { clickbn ? 
               <div className='container-f'>
                  <form  target='/' type='submit' >
                    <div className='wrapper-f'>
                      <div className='name-f' >
                        <label htmlFor="">Movie Name:</label>
                          <input type='text ' placeholder={item.show?.name}  value={item.show?.name} name='MovieName' readOnly={item.show?.name}  />
                      </div>
                      <div>
                       <label htmlFor="">Language:</label> 
                          <input type='text ' placeholder={item.show?.language} value={item.show?.language} name='language' readOnly={item.show?.language}/>
                      </div>
                      <div>
                       <label htmlFor="">Name:</label> 
                          <input type='text ' placeholder="type your name" value={userdata.Name} name='Name' onChange={HandleSubmit} />
                      </div>
                      <div>
                       <label htmlFor="">Email:</label> 
                          <input type='email' placeholder='type your email' value={userdata.Email} name='Email' onChange={HandleSubmit} />
                      </div>
                      <div>
                       <label htmlFor="">Phone:</label> 
                          <input type='tel' placeholder='type your phone number' value={userdata.Phone} name='Phone' onChange={HandleSubmit} />
                      </div>
                      <div>
                        <label>Booking Date:</label>
                          <input type='date'  value={userdata.BookingDate} name='BookingDate' onChange={HandleSubmit} />
                      </div>
                      <div>
                        <label>Number of tickets:</label>
                          <input type='number' autoComplete='false' placeholder={1} name='Numberoftickets' value={userdata.Numberoftickets}  onChange={HandleSubmit}/>
                      </div>
                    
                      </div>
                      <button className='btn-f' onClick={HandleSubmitform} >BookNow</button>
                  </form>
              </div>
              :'' } 
         
   
           </div>
              
             
        
            
          ))}
       
    </div>
   
   
    )

}

export default Moviedetail