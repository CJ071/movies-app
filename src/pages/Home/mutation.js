export const rateMovie=async(movie_id,rating)=>{
      
const res=await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=${import.meta.env.VITE_API_KEY}`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
        //   Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`
        },
        body:`{"value":${rating}}`
      },
       )

      return res.json()
}

export const rateTvShow=async(tvShow_id,rating)=>{
    
    const res=await fetch(`https://api.themoviedb.org/3/tv/${tvShow_id}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=${import.meta.env.VITE_API_KEY}`,
    {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
        },
        body:`{"value":${rating}}`
      },
    )
    return res.json()
}