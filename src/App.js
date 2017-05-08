import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Devtools from 'mobx-react-devtools';
import Counter from './components/counter';

import logo from './logo.svg';
import './App.css';

const App = observer(class App extends Component {

  handleInc = () => {
    this.props.store.increment();
  }

  handleDec = () => {
    this.props.store.decrement();
  }

  render() {
    return (
      <div className="App">
        <Devtools />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mobx + create-react-app</h2>
        </div>
        <p className="App-intro">
          Examples of Mobx using create-react-app.
        </p>
        <Counter {...this.props} />
      </div>
    );
  }
});

export default App;
