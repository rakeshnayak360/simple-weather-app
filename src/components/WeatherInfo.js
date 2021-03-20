import React, { Component } from 'react';
import '../components/WeatherInfo.css';

export class WeatherInfo extends Component{
    render(){
        const { temparature, status} = this.props;
        return(
            <div className='weatherBox text-center mt-5 p-5'>
                <div className='weather-temp'>{temparature} <span>&#176;c</span></div>
                <div className='weather-status mt-3'>{status}</div>
            </div>
        )
    }
}

export default WeatherInfo;