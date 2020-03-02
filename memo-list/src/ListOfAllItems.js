import React, { Component } from "react";
export default class ListOfAllItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            editValue: this.props.item.text
        };
    }

    editFunc = () => {
        this.setState({
            edit: !this.state.edit
        }, () => {
            //    this.props.editItem(this.state.editValue);
        }
        );
    };

    render() {
        const data = this.props.item;

        return (
            <div className="items">
                <li
                    onClick={() => {
                        this.props.completeItem(data.id);
                    }}
                >
                    {this.state.edit ?
                        (
                            <input
                                type="text"
                                value={this.state.editValue}
                                onChange={e => {
                                    this.setState({
                                        editValue: e.target.value
                                    });
                                }}
                            />
                        ) :
                        (
                            <p className={data.complete ? "cross-out" : null}> {this.state.editValue}</p>
                        )
                    }

                    <button
                        onClick={() => this.props.removeItem(data.id)}
                        className="btn-delete"
                    >X</button>

                    <button onClick={this.editFunc}>
                        {this.state.edit ? "save" : "edit"}
                    </button>

                </li>
            </div>
        );
    }
}
