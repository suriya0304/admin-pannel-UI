import { Article, BorderAll, Dashboard, HealthAndSafety, InsertChart, LocalShipping, Logout, Notifications, Person, Settings } from '@mui/icons-material'
import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'

const FlexBox=styled(Box)({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  paddingTop:'5px'
})
const ContainerBox=styled(Box)({
  padding:'9px'
})

const Sidebar = () => {
  return (
    <div className="" style={{position:'sticky',top:'0',height:'100vh'}}>
    <Stack direction='column' sx={{height:'100%'}} borderRight='0.5px solid lightgray' >
      <FlexBox textAlign='center' justifyContent='center'   sx={{height:'60px',padding:'0'}}>
        <Typography variant='h6'>Admin Panel</Typography>
      </FlexBox>
      <Box flex={10} sx={{display:'flex',justifyContent:'center',flexDirection:'column' }}>
        <ContainerBox>
          <Typography>MAIN</Typography>
          <FlexBox>
            <Dashboard/>
            <Typography>Dashboard</Typography>
          </FlexBox>
        </ContainerBox>

        <ContainerBox>
          <Typography>LISTS</Typography>
          <FlexBox>
            <Person/>
            <Typography>Users</Typography>
          </FlexBox>
          <FlexBox>
            <BorderAll/>
            <Typography>Products</Typography>
          </FlexBox>
          <FlexBox>
            <LocalShipping/>
            <Typography>Orders</Typography>
          </FlexBox>
        </ContainerBox>

        <ContainerBox>
          <Typography>USEFULL</Typography>
          <FlexBox>
            <InsertChart/>
            <Typography>Stats</Typography>
          </FlexBox>
          <FlexBox>
            <Notifications/>
            <Typography>Notification</Typography>
          </FlexBox>
        </ContainerBox>

        <ContainerBox>
          <Typography>SERVICE</Typography>
          <FlexBox>
            <HealthAndSafety/>
            <Typography>System health</Typography>
          </FlexBox>
          <FlexBox>
            <Article/>
            <Typography>Logs</Typography>
          </FlexBox>
          <FlexBox>
            <Settings/>
            <Typography>Settings</Typography>
          </FlexBox>
        </ContainerBox>

        <ContainerBox>
          <Typography>USER</Typography>
          <FlexBox>
            <Person/>
            <Typography>Profile</Typography>
          </FlexBox>
          <FlexBox>
            <Logout/>
            <Typography>Logout</Typography>
          </FlexBox>
        </ContainerBox>

      </Box>
      <ContainerBox flex={1}>
        <Typography >THEME</Typography>
        <FlexBox>
          <div className="white" style={{width:'20px',height:'20px',backgroundColor:"white",borderRadius:'3px',border:'1px solid black'}}>
            
          </div>
          <div className="black" style={{width:'20px',height:'20px',backgroundColor:"black",borderRadius:'3px',border:'1px solid black'}}></div>
        </FlexBox>
      </ContainerBox>
    </Stack></div>
    )
}

export default Sidebar