import { Brightness6, Fullscreen, Language, Menu, Message, Notifications } from '@mui/icons-material'
import { Avatar, Badge, Box, Stack, styled, TextField, Typography } from '@mui/material'
import React from 'react'


const Navbar = () => {
  
  const StyledBox=styled(Box)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  })
  return (
      <div className=""  style={{position:'sticky',top:'0'}}>
      <Stack  direction='row' justifyContent='space-between' alignItems='center' padding='10px 20px'>
        <TextField size='small' id="outlined-basic" variant="outlined" placeholder='search..'  />
        <StyledBox sx={{gap:{md:'20px',sm:'10px'}}}>

          <StyledBox>
            <Language/>
            <Typography>English</Typography>
          </StyledBox>

          <Brightness6/>
          <Fullscreen/>
          <Badge badgeContent={4}  color="error">
            <Message />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>   
          <Menu/>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </StyledBox>
      </Stack>  </div>

  )
}

export default Navbar