import React, { Component } from 'react'
import ListOfAllItems from './ListOfAllItems';

export default class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: ""
        }
    }

    // add user input
    handleNewItem = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    // add user input to the memo list
    handleSubmit = (e) => {
        e.preventDefault();

        // check if user input is not empty, then run the function 
        if (this.state.userInput.trim() !== "") {
            // call the function to ad new item to array todo list
            this.props.addItem(this.state.userInput.trim())

            // empty the input again
            this.setState({
                userInput: ""
            })
        }
    }


    render() {
        const items = this.props.item;
        // console.log(items);

        const memoList = items.map(item => {
            return (
                <ListOfAllItems
                    item={item}
                    key={item.text}
                    completeItem={this.props.completeItem}

                />
            )
        });


        return (
            <div className="memo-list">
                <h2>My plan for the day</h2>

                <ul> {memoList} </ul>

                <form className="memo-form" onSubmit={this.handleSubmit}>
                    <label className="input-item" for="user-input">
                        <input type="text" name="todo" id="user-input" value={this.state.userInput} onChange={this.handleNewItem} />
                    </label>
                    <input type="submit" className="btn" value="ADD" />
                </form>
            </div>
        )
    }
}
