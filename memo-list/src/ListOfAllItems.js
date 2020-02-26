import React from 'react'

export default function ListOfAllItems(props) {
    const data = props.item;
    // console.log(data);

    return (
        <div>
            <li
                className={data.complete ? "cross-out" : null}
                onClick={() => { props.completeItem(data.id) }}
            >
                {data.text}
            </li>
        </div>
    )
}
