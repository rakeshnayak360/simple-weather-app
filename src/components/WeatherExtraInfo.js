import React, { Component } from 'react';

import LabelText from './LabelText';
import styled from 'styled-components';

const ExtraInfo = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin: 20px 0;
`;

export class WeatherExtraInfo extends Component{
    render(){
        return(
            <ExtraInfo>
                <LabelText name='Feels Like' value={this.props.data && this.props.data.feels_like} unit={'&#176;'} />
                <LabelText name='Humidity' value={this.props.data && this.props.data.humidity} unit='%' />
                <LabelText name='Min' value={this.props.data && this.props.data.temp_max} unit={'&#176;'} />
                <LabelText name='Max' value={this.props.data && this.props.data.temp_min} unit={'&#176;'} />
            </ExtraInfo>
        )
        
    }
}


export default WeatherExtraInfo;