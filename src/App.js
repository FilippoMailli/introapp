// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
// import Hello from './hello.js';

const happy = <h2>I am Happy</h2>;
    function getDate(date) {
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
    }

class App extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="App">
            <h1>My first React App</h1>
          {/*<header className="App-header">*/}
              {/*<Hello/>*/}
          {/*</header>*/}
        </div>
            {happy}
            { 4 + 4}
            <h2> Today is { new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString() }</h2>
            <h2> { getDate(new Date())}</h2>
        </React.Fragment>
    );
  }

}

export default App;
