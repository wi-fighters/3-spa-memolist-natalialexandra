import React from 'react'

export default function ListOfAllItems(props) {
    const data = props.item;

    return (
        <div>
            <li>{data.text}</li>
        </div>
    )
}
