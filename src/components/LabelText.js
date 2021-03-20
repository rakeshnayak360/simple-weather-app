import React, { Component } from 'react';
import styled from 'styled-components';

const ExtraData = styled.div`
    font-size: 1.6em; font-weight: bold;
`;

const ExtraLabel = styled.div`
    font-size: 0.9em;
`;

export class LabelText extends Component{
    render(){

        const { name, value, unit} = this.props;
        return(
            <div className='extras'>
                <ExtraData>{value}<span dangerouslySetInnerHTML={{ __html: unit }}></span></ExtraData>
                <ExtraLabel>{name}</ExtraLabel>
            </div>
        )
    }
}

export default LabelText;