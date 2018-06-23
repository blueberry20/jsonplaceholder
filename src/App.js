import React, { Component } from 'react';
import './App.css';
//import UserTracker from './components/user_tracker';
import UserTrackerList from './components/user_tracker_list';

class App extends Component {
  render() {
    return (
      <div className="App">
           <header>
            	<h1>JSON Placeholder</h1>
	        </header>
	        <div className="wrapper">
	        	<UserTrackerList/>
	        </div>
	      </div>
    );
  }
}

export default App;
