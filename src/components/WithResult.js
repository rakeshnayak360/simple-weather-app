import React, { Component } from 'react';
import '../components/WithResult.css';

export class WithResult extends Component{

    render(){
        const { todayDate, data: { name, main, weather } } = this.props;
        return(
            <div className='ResultWrapper text-center col-12 mt-5'>
                <h1 className='cityName'>{name}</h1>
                <h3 className='date'>{todayDate}</h3>
                
                <div className='weatherBox text-center mt-5 p-5'>
                    <div className='weather-temp'>{main && main.temp} <span>&#176;c</span></div>
                    <div className='weather-status mt-3'>{weather && weather[0].main}</div>
                </div>

                <div className="extraInfo">
                    <div className='extras'>
                        <div className='extra-data'>{main && main.feels_like}</div>
                        <div className='extra-label'>Feels Like</div>
                    </div>

                    <div className='extras'>
                    <div className='extra-data'>{main && main.humidity}</div>
                        <div className='extra-label'>Humidity</div>
                    </div>

                    <div className='extras'>
                    <div className='extra-data'>{main && main.temp_max}&#176;</div>
                        <div className='extra-label'>Max</div>
                    </div>

                    <div className='extras'>
                    <div className='extra-data'>{main && main.temp_min}&#176;</div>
                        <div className='extra-label'>Min</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WithResult;