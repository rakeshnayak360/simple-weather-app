import React, { Component } from 'react';
import WithResult from './WithResult';
import WithoutResult from './WithoutResult';

export class Result extends Component{

    render(){
        const{ todayDate, data: { cod }} = this.props;
        return(
            <React.Fragment>
                { cod !== '404' ? 
                    <WithResult todayDate={todayDate} data={this.props.data}  /> : 
                    <WithoutResult />
                }
            </React.Fragment>
        )
    }
}

export default Result;