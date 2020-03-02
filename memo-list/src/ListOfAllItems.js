import React from 'react'

export default function ListOfAllItems(props) {
    const data = props.item;

    return (
        <div>
            <li
                className={data.complete ? "cross-out" : null}
                onClick={() => { props.completeItem(data.id) }}
            >
                {data.text}
                <button onClick={() => props.removeItem(data.id)} className="btn-delete">X</button>
                <button onClick={() => { props.editItem("new") }}>edit</button>
            </li>
        </div>
    )
}
