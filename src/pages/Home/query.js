

export const fetchMovies=async()=>{
 const res=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
{
     headers:
     {
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`
    }
  
}
 )
 return res.json()
}

export const fetchTvShows=async () =>{
const res=await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',{
    headers:{
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`
    }
})

return res.json()

}