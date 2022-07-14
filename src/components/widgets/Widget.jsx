import { AccountBalanceOutlined,  KeyboardArrowUp, MonetizationOn, PersonOutlined, ShoppingCart } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';
import React from 'react'

const Widget = ({type}) => {
  let data;
  let ammount=100;
  let diff=20;
  switch(type){
    case 'user':{
        data={
            title:'USER',
            link:'view all users',
            money:false,
            icon :<PersonOutlined sx={{color:'rgb(255,0,0)',padding:'5px',borderRadius:'5px',backgroundColor:'rgba(255,0,0,0.2)'}}/>
        }
        break;
    }
    case 'earnings':
        data={
            title:'EARNINGS',
            link:'view all earnings',
            money:true,
            icon:<MonetizationOn sx={{color:'rgb(255,255,0)',padding:'5px',borderRadius:'5px',backgroundColor:'rgba(255,255,0,0.2)'}}/>
        }
        break;
    case 'orders':
        data={
            title:'ORDERS',
            link:'view all orders',
            money:false,
            icon:<ShoppingCart sx={{color:'rgb(0,255,0)',padding:'5px',borderRadius:'5px',backgroundColor:'rgba(0,255,0,0.1)'}}/>
        }
        break;
    case 'balance':
        data={
            title:'BALANCE',
            link:'see details',
            money:true,
            icon:<AccountBalanceOutlined sx={{color:'rgb(143,0,255)',padding:'5px',borderRadius:'5px',backgroundColor:'rgba(143,0,255,0.2)'}}/>
        }
        break;
    default :
        break
  }
    return (
        <Stack direction='row' justifyContent='space-between' flex={1} p='10px' height='100px' sx={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
            <Stack direction='column' justifyContent='space-between'>
                <span>{data.title}</span>
                <span style={{fontSize:'30px'}}>{(data.money && '$')+ammount}</span>
                <span style={{borderBottom:'0.5px solid rgba(0,0,0,0.2)'}}>{data.link}</span>
            </Stack>
            <Stack direction='column' justifyContent='space-between' alignItems='end'>
                <Box color='green'>
                    <KeyboardArrowUp/>
                    {diff+'%'}
                </Box>
                <div >
                    {data.icon}
                </div>
                
            </Stack>
            
        </Stack>
  )
}

export default Widget