import React, { Component } from 'react';
// import './App.css';
// import './components/Registration';
import Registration from "./components/Registration";

import MainPage from './components/Main';
import Calendar from "./components/Calendar";

class App extends Component {
  render() {
    return (
      <div>
        {/*<Registration/>*/}
        {/*<Calendar/>*/}
        <MainPage/>
      </div>
    );
  }
}

export default App;
