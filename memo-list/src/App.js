import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ListItem from './ListItem';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 0, text: "be happy", complete: false }
      ]
    }
  }

  render() {
    const memoItem = this.state.items.map(item => {
      return item;
    });

    return (
      <div className="App">
        <Header />

        <ListItem item={memoItem} />
      </div>
    )
  }
}
