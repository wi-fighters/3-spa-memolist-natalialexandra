import React, { Component } from 'react'
import ListOfAllItems from './ListOfAllItems';

export default class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: ""
        }
    }


    render() {
        const items = this.props.item;
        const memoList = items.map(item => {
            return (
                <ul>
                    <ListOfAllItems item={item} key={item.text} />
                </ul>
            )
        });


        return (
            <div className="memo-list">
                <h2>My plan for the day</h2>

                {memoList}

                <form className="memo-form">
                    <label className="input-item" for="user-input">
                        <input type="text" name="todo" id="user-input" />
                    </label>
                    <input type="submit" className="btn" value="ADD" />
                </form>
            </div>
        )
    }
}
