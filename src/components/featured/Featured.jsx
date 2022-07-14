import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    const StyledStack=styled(Stack)({
        direction:'column',
        justifyContent:'center',
        alignItems:'center'
    })
    const TypographyA=styled(Typography)({
        textAlign:'center'
    })
  return (
    <div style={{flex:2,boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',padding:'20px'}}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='h6'>Total revenue</Typography>
            <MoreVert/>
        </Stack>
        <div className='test' style={{ height: '200px' ,display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'10px'}}>
            <div className="circle" style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={68} styles={{path:{stroke:'	rgba(144, 238, 144,0.7) '}}}/>
                
            </div>
            <Typography color='#99FF99 ' variant='h4' style={{position:'absolute'}}>68%</Typography>
            
            
        </div>
        <StyledStack gap='10px' padding='10px 0'>
            <Typography variant='h6'>Total sales made today</Typography>
            <Typography variant='h3'>$530</Typography>
            <Typography></Typography>
            <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
                <StyledStack color='red'>
                    <TypographyA >Target</TypographyA>
                    <Typography><KeyboardArrowDown/>$12.4k</Typography>
                </StyledStack>
                <StyledStack color='green'>
                    <TypographyA >Last Week</TypographyA>
                    <TypographyA><KeyboardArrowUp/>$3.1k</TypographyA>
                </StyledStack>
                <StyledStack color='green'>
                    <TypographyA >Last Month</TypographyA>
                    <Typography><KeyboardArrowDown/>$14.4k</Typography>
                </StyledStack>    
            </Stack>
        </StyledStack>
    </div>
  )
}

export default Featured