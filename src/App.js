import React, { Component } from 'react';
import List from './List'
import './App.css';
import TheDate from './srcstate/TheDate'
import Counter from './state/Counter'
class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
     console.log(this.state)
  return (
    <div><TheDate></TheDate>
    <Counter></Counter></div>
    <div><Counter count={123} /></div>
  )
    
    
  }
}

export default App;