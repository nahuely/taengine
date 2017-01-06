import React from 'react';

import Header from './Header'
import Main from './Main'
import SideBar from './SideBar'

import './../assets/css/App.scss'

const App = ({ children }) => {
    return (
      <div className="App-container">
        <Header title="Title"/>
        <div className="App-navAndMain">
          <SideBar />
          <Main>
            { children }
          </Main>
        </div>
      </div>
    )
}

export default App;
