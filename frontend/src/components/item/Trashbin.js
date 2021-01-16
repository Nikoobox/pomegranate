import React from 'react';
import { BsTrash } from "react-icons/bs";

function Trashbin(props) {
    const drop = e =>{
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        
        const card = document.getElementById(card_id);
        // card.style.display='block';
        console.log(card)
        console.log(props);
    // pprops
        props.deleteItem(card.id)
        // e.target.appendChild(card)
    }

    const dragOver = e => {
        e.preventDefault();
    }
    
    return (
        <div
            className='trashbin-box'
            id={props.id}
            onDrop = {drop}
            onDragOver={dragOver}
        >
            <BsTrash />
        </div>
    )
}

export default Trashbin;

