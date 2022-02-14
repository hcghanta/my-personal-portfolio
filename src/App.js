import React, { Component } from 'react';
import './App.css';
import Home from './home'
import EasterEggs from './easterEggs'
import {Routes, Route} from 'react-router-dom'
import Spades from "./scoreboards/spades";
import Poker from "./scoreboards/poker";

class App extends Component {
  render() {
    return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Home/>}/>
			  	<Route exact path="/easter-eggs" element={<EasterEggs/>}/>
				<Route exact path="/easter-eggs/play-spades" element={<Spades/>}/>
				<Route exact path="/easter-eggs/play-poker" element={<Poker/>}/>
		  </Routes>
		</div>
    );
  }
}

export default App;
