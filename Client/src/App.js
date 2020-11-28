import './App.css';
import React, {Component} from 'react'
import {Route, BrowserRouter} from 'react-router-dom'


class App extends Component {
  
  componentDidMount() {
      console.log('Mounted!')
  }
  render(){
    console.log(this.props)
    return (
      <div className="App" >
        <header className="App-header">
        </header>
        <h1>HI</h1>
      </div>
    );
  }
}


export default App;
