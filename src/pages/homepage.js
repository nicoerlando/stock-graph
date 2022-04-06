import React from 'react'
import "./homepage.css"
import {options, data} from '../components/graph/LineAttr'
import { Line } from 'react-chartjs-2';

export default function Homepage() {
  return (
    <div className='homepage'>   
        <div className = 'graph'>
            <Line options={options} data={data} height="500px" width="1200px"/>
        </div>
        {/* <div className = 'historica-data'>
            <HistTable/> 
        </div> */}
    </div> 
  )
}
