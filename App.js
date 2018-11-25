import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import WordLookUp from './components/WordLookUp/WordLookUp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <WordLookUp/>
        {/*WordUsage/>*/}
       </div>
    );
  }
}

export default App;
