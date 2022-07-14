import { Typography } from '@mui/material';
import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Charts = () => {
  const data=[
    {name:'january',total:'1090'},
    {name:'febuary',total:'1980'},
    {name:'march',total:'890'},
    {name:'april',total:'1200'},
    {name:'may',total:'800'},
    {name:'june',total:'1700'}
  ]
  return (
    <div style={{flex:4,boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}} >
    <Typography style={{paddingBottom:'10px',textAlign:'center'}} variant='h6'>Last 6 months result</Typography>
    <ResponsiveContainer height={400}>
    <AreaChart
      height={200}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis  domain={[0,2200]}/>
      <Tooltip />
      <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
    </div>
      
  )
}

export default Charts