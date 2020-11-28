import './App.css';
import React, {Component} from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import Stream from './TwitchPlayer.jsx'


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
        hi
        <BrowserRouter>
          <Route path='/stream' component={Stream}/>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
