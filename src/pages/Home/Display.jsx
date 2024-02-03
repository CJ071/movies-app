import React, { useState } from 'react'
import { Form, Grid,Image,Input,Segment } from 'semantic-ui-react'
import {useMutation} from '@tanstack/react-query'
import { rateMovie, rateTvShow} from './mutation'
import {toast} from 'react-toastify'
import "react-toastify/ReactToastify.css"

function Display({data,displayType}) {

    const [rating,setRating]=useState(0)

    const onSuccess=()=>{
        toast.success("Successfully Rated")
    }
    const onError=()=>{
        toast.success("Something went wrong")
    }
    

    const {mutateAsync:rateMovieMutation}=useMutation({mutationKey:["rateMovie"],mutationFn:(id)=>rateMovie(id,rating),onSuccess,onError})

    const {mutateAsync:rateTvMutation}=useMutation({mutationKey:["rateTvshow"],mutationFn:(id)=>rateTvShow(id,rating),onSuccess,onError})

    const rate=displayType==="movies"?rateMovieMutation:rateTvMutation;

  
  return (
     <Grid columns={3} doubling stackable stretched>   
{data?.results?.map((item,index)=>
        <Grid.Column key={index}>
            <Segment>
            <Image src={`https://image.tmdb.org/t/p/original/${item.poster_path!==null?item.poster_path:null}`} fluid />
                <p>Release Date: {item.release_date} | Rating: {item.vote_average}</p>
                <p>{item.title?item.title:item.name}</p>
                <p>{item.overview.slice(0,200)}...</p>
            </Segment>
            <Form>
                <Form.Group>
                    <Form.Input type='number' min={0} max={10} step={0.5} 
                    onChange={(e)=>Number(setRating(e.target.value))}
                    action={
                        {
                            color:'teal',
                            labelPosition:'right',
                            icon:'like',
                            content:"Rate",
                            onClick:()=>{
                                rate(item.id)
                                
                            }
                        }
                    }/>
                </Form.Group>
            </Form>
        </Grid.Column>
)}
</Grid>
)
}

export default Display

