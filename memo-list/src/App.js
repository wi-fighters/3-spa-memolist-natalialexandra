import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ListItem from './ListItem';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 0, text: "be happy", complete: false },
        { id: 1, text: "relax", complete: false }
      ]
    }
  }

  // add item to memo list
  addItem = (newItem) => {
    // create new item
    let item = { id: this.state.items.length, text: newItem, complete: false };

    // add new item to the array copy
    this.setState({
      items: [...this.state.items, item]
    })
  }

  render() {
    const memoItem = this.state.items.map(item => {
      return item;
    });

    return (
      <div className="App">
        <Header />

        <ListItem item={memoItem} addItem={this.addItem} />
      </div>
    )
  }
}
