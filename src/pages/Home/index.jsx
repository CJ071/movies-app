import { useQuery } from "@tanstack/react-query"
import { Button, Loader } from "semantic-ui-react"
import { fetchMovies,fetchTvShows } from "./query"
import Display from "./Display"
import { useState } from "react"

export const DisplayType={
  Movies:"movies",
  Tv:"tvshows"
}

function Home() {
    const [allData,setAllData]=useState(null);
    const [displayDataType,setDisplayDataType]=useState(DisplayType.Movies)
    const {data:movieData,isLoading:isLoadingMovies}=useQuery({queryKey:["movies"],queryFn:fetchMovies})
    const {data:tvData,isLoading:isLoadingTvShows}=useQuery({queryKey:["tvshows"],queryFn:fetchTvShows})



  if(isLoadingMovies || isLoadingTvShows)
  {
    return <Loader active/>
  }
   
    const handleMovieClick=()=>{
      setDisplayDataType(DisplayType.Movies)
     setAllData(movieData)
    }

    const handleTvClick=()=>{
      setDisplayDataType(DisplayType.Tv)
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
       {allData===null?<Display data={movieData} displayType={displayDataType}/>:<Display data={allData} displayType={displayDataType}/>}
    </div>
  )
}

export default Home