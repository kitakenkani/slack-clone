import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import './App.css';



function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>

      {/* Header */}
      <Header/>
      <div className="app__body">
        <Sidebar/>
      {/* Sidebar */}
      {/* React-Router -> CHat screen */}
  
      </div>
      

    </div>
  );
}

export default App;
