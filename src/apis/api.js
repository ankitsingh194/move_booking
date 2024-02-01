import axios from 'axios'


export const getAlldata = async() => {
    try {
      const response =  await axios.get('https://api.tvmaze.com/search/shows?q=all',{
        timeout:10*1000
      })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error,'data cannote be fectched')
        
    }
}




