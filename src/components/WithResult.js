import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherInfo from './WeatherInfo';

const CityName = styled.h1`
    color: #fff;
    text-shadow: 0 2px 0 rgba(0,0,0,0.5);
`;

const DateToday = styled.h3`
    font-size: 1em;
    color: #fff;
    text-shadow: 0 2px 0 rgba(0,0,0,0.5);
`;

export class WithResult extends Component{

    render(){
        const { todayDate, data: { name, main, weather } } = this.props;

        return(
            <div className='ResultWrapper text-center col-12 mt-5'>
                <CityName>{name}</CityName>
                <DateToday>{todayDate}</DateToday>

                <WeatherInfo temparature={main && main.temp} status={weather && weather[0].main} />
                <WeatherExtraInfo data={this.props.data ? main : null} />
            </div>
        )
    }
}

export default WithResult;