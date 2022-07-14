import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.css'
const List = () => {
  return (
    <div className='home' style={{position:'relative'}}>
      <Sidebar />
      <div className='sidebar-home'>
        
        <Navbar/>
      </div>
    </div>
  )
}

export default List