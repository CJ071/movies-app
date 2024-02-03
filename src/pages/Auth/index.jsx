import React from 'react'
import { Button, Grid, Header, Segment ,Form} from 'semantic-ui-react'
import { useMutation } from '@tanstack/react-query'
import { mutationLogin } from './mutation'
import {useNavigate} from 'react-router-dom'
function Auth() {
  const {mutateAsync}=useMutation({mutationKey:["login"],mutationFn:mutationLogin})
  const navigate=useNavigate()
  const handleLogin=async()=>{
    try {
      const data=await mutateAsync()
      if(data && data.guest_session_id)
      {
        localStorage.setItem("guest_session_id",data.guest_session_id)
        navigate("/")
      }
      else{
        console.error("Invalid data format",data)
      }
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  return (
    <Grid textAlign='center' verticalAlign='middle' style={{height:"100vh"}}>
      <Grid.Column style={{maxWidth:450}}>
      <Header as="h2" color='violet' textAlign='center'>
        Welcome! login by registering as guest below
      </Header>
      <Form size="large">
        <Segment stacked>
        <Button onClick={handleLogin}>Login as Guest</Button>
        </Segment>
      </Form>
   
      </Grid.Column>
    </Grid>
  )
}

export default Auth
