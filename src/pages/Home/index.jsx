import { useQuery } from "@tanstack/react-query"
import { Button } from "semantic-ui-react"
import { fetchMovies,fetchTvShows } from "./query"
import Display from "./Display"
import { useState } from "react"


function Home() {
    const [allData,setAllData]=useState(null);
    const {data:movieData,isLoading:isLoadingMovies}=useQuery({queryKey:["movies"],queryFn:fetchMovies})
    const {data:tvData,isLoading:isLoadingTvShows}=useQuery({queryKey:["tvshows"],queryFn:fetchTvShows})


   
    const handleMovieClick=()=>{
     setAllData(movieData)
    }

    const handleTvClick=()=>{
     setAllData(tvData)
    }
  return (
    <div>
        <div style={{display:"flex",justifyContent:'center',marginTop:45,marginBottom:45}}>
        <Button.Group color="violet">
            <Button onClick={handleMovieClick}>Movies</Button>
            <Button onClick={handleTvClick}>TvShows</Button>
        </Button.Group>
        </div>
       {allData===null?<Display data={movieData}/>:<Display data={allData}/>}
    </div>
  )
}

export default Home