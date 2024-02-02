import React from 'react'
import { Grid,Image,Segment } from 'semantic-ui-react'

function Display({data}) {
  return (
     <Grid columns={3} doubling stackable stretched>    
{data?.results.map((item,index)=>
        <Grid.Column key={index}>
            <Segment>
            <Image src={`https://image.tmdb.org/t/p/original/${item.poster_path!==null?item.poster_path:null}`} fluid />
                <p>Release Date: {item.release_date} | Rating: {item.vote_average}</p>
                <p>{item.title?item.title:item.name}</p>
                <p>{item.overview.slice(0,200)}...</p>
            </Segment>
        </Grid.Column>
)}
</Grid>
)
}

export default Display



// import { Grid ,Segment,Image} from "semantic-ui-react"

// export function Display({data}) {

//   return (
//     <Grid columns={3} doubling stackable stretched>
//     {data?.results.map((item, index) => (
//       <Grid.Column key={index} >
//         <Segment>
//           <Image src={`https://image.tmdb.org/t/p/original/${item.poster_path!==null?item.poster_path:null}`} fluid />
//           <p>Release Date:{item.release_date} | Rating:{item.vote_average}</p>
//           <p>{item.title?item.title:item.name}</p>
//           <p>{item.overview.slice(0,200)}...</p>
//         </Segment>
//       </Grid.Column>
//     ))}
//   </Grid>
//   )

// }

// export default Display
