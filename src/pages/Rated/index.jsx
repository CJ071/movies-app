import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Container, Menu, Segment,Header } from 'semantic-ui-react'
import { fetchRatedMovies, fetchRatedTvShows } from './query'
import Display from '../Home/Display'
import { Navigate } from 'react-router'
import { DisplayType } from '../Home'

export function Rated() {
  const [tab,setTab]=useState(DisplayType.Movies)
  const {data:ratedMovies,isLoading:isLoadingRatedMovies}=useQuery({queryKey:["ratedMovies"],queryFn:fetchRatedMovies})
  const {data:ratedTvShows,isLoading:isLoadingRatedTvShows}=useQuery({queryKey:["ratedTvShows"],queryFn:fetchRatedTvShows})

  if(localStorage.getItem("guest_session_id")===null)
  {
    return <Navigate to={"/auth"}/>
  }
  if(!isLoadingRatedMovies)
  {
    console.log(ratedMovies.results)
  }
  const handleTab=(e)=>{
    console.log("ratedmovieslist",ratedMovies)
    const val=e.target.innerText
    if(val==="Movies")
    {
      setTab("Rated Movies")
      return;
    }
    setTab("Rated TvShows")
   
  }

  return (
    <Container style={{marginTop:50}}>
      <Menu pointing secondary>
      <Menu.Item name='Movies' onClick={(e)=>handleTab(e)}/>

      <Menu.Item name='TvShows' onClick={(e)=>handleTab(e)}/>
      </Menu>

      <Segment>
          {tab===DisplayType.Movies
          ?<>
          <Header>{tab}</Header>
          {isLoadingRatedMovies?(<p>Loading Rated Movies..</p>):(<Display data={ratedMovies} displayType={DisplayType.Movies}/>)}
          </>
          :<>
          <Header>{tab}</Header>
          {isLoadingRatedTvShows?(<p>Loading Rated TvShows..</p>):(<Display data={ratedTvShows} displayType={DisplayType.Tv}/>)}
          </>
          }
      </Segment>
   

      </Container>
  )
}

export default Rated