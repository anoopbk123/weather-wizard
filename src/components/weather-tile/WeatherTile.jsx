import React from 'react'
import './WeatherTile.css'

export default function WeatherTile({title, value, icon}) {
  return (
    <div className='weather-tile text-center m-1'>
      <div className='weather-tile-icon m-1'>
        <i className={icon}></i>
      </div>
      <div className="weather-tile-value m-1">{value}</div>
      <div className="weather-tile-title m-1">
        <h3>{title}</h3>
      </div>
    </div>
  )
}
