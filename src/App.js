import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import React from 'react';

function App() {
  return (
    <div className="app">
      <div className="ht">
      <Header/>

      </div>
      <div className="container">
        <div className="lt">
        <LeftBar/>

        </div>
        <div className="mid">

        <Feed/>
        </div>
        <div className="rt">
        <RightBar/>

        </div>
      </div>
    </div>
  );
}

export default App;
