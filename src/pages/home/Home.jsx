import React from 'react'
import Charts from '../../components/charts/Charts'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Widget from '../../components/widgets/Widget'
import './home.css'
const Home = () => {
  return (
    <div className='home' style={{position:'relative'}}>
      <Sidebar />
      <div className='sidebar-home'>
        
        <Navbar/>
        <div className="widget-container">
          <Widget type={'user'}/>
          <Widget type={'orders'}/>
          <Widget type={'earnings'}/>
          <Widget type={'balance'}/>
        </div>
        <div className="charts" >
          <Featured></Featured>
          <Charts></Charts>
        </div>
        <div className="table" style={{padding:'10px'}}><Table/></div>
        
      </div>
    </div>
    

  )
}

export default Home