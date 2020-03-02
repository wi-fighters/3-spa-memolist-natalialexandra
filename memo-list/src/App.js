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
        { id: 1, text: "relax", complete: true }
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


  // edit item
  editItem = (id, newInput) => {
    this.state.items.map(item => {
      if (this.state.id === id) {
        item = newInput;
        console.log(item);

        this.setState({
          items: newInput
        })
      }
    });
  }


  // cross out completed task
  completeItem = (id) => {
    const newState = this.state.items.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
        return item;
      } else {
        return item;
      }
    })
    // update the state
    this.setState({
      items: newState
    })
  }


  // delete item from memo list
  removeItem = (id) => {
    const newArr = this.state.items.splice(id, 1);
    this.setState({
      items: newArr
    })
  }

  render() {
    const memoItem = this.state.items.map((item) => {
      return item;
    });

    return (
      <div className="App">
        <Header />

        <ListItem
          item={memoItem}
          addItem={this.addItem}
          completeItem={this.completeItem}
          removeItem={this.removeItem}
          editItem={this.editItem}
        />
      </div>
    )
  }
}
