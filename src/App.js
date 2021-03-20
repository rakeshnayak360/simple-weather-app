import React, { Component } from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchBox from '../src/components/SearchBox';
import Result from '../src/components/Result';

const api = {
  key: '045d09036418115967201663b13a6a6a',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const Preloader = styled.div`
  min-height: 100vh;
  position: absolute;
  z-index: 1;
  background: #fff;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export class App  extends Component{
  constructor(props) {
    super(props);

    this.state={
      searchText: 'Udupi',
      result:[],
      loading: true,
      season: 1
    };
  }

  componentDidMount(){
    this.callAPI();
  }

  handleTextChange = (e) => {
   this.setState({ searchText: e.target.value });
  };

  handleEnter = (e) => {
    if(e.key === 'Enter'){
      this.callAPI();
    }
  };

  createDate = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  callAPI = () => {
    fetch(`${api.base}weather?q=${this.state.searchText}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          this.setState({ result : result, searchText: '', loading: false });
          let temparature = result ? (result.main ? Math.round(result.main.temp) : null) : null;
          switch(true){
            case  temparature === null : this.setState({ season: 1});
                break;
            case temparature >= 35: this.setState({ season: 1});
                break;
            case temparature >= 24 && temparature < 35 : this.setState({ season: 2});
                break;
            case temparature >= 5 && temparature < 24 : this.setState({ season: 3});
                break;
            case  temparature < 5 : this.setState({ season: 4});
                break;
            default: 
                break;
          }
        });
  };

render(){
  return (
      <div className='app'>
        {this.state.loading && <Preloader><CircularProgress color="secondary" /></Preloader> }

        <div className={`Mainwrapper season${this.state.season}`}>
            <SearchBox
            value={this.state.searchText}
            onEnterPress={this.handleEnter}
            onChange={this.handleTextChange} />
            <Result data={this.state.result} todayDate={this.createDate(new Date())} />
        </div>
      </div>
    );
  }
}

export default App;
