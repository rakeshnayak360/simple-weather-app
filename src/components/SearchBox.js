import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 15px;
    border: none;
    border-radius: 50px;
    width: 100%;
    margin: auto;
    outline:none;
    font-size: 1em;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2);
`;

export class SearchBox extends Component{

    render(){
        const {onChange, value, onEnterPress} = this.props;
        return(
            <Input type='text' placeholder='Search' value={value} onChange={onChange} onKeyDown={onEnterPress} />
        )
    }
}

export default SearchBox;