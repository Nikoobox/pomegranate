import React from 'react';
import { BsExclamationTriangle} from "react-icons/bs";

class ItemShow extends React.Component {

    dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);

        // setTimeout(()=>{
            
        //     target.style.display = 'none';
        // }, 0)
    }

    dragOver = e => {
        console.log(e);
        e.stopPropagation();
    }

    render() {
        // console.log(this.props);
        const { item } = this.props;
        const quantities = item.quantity <= 1 ?
            <div className='low-quantity-box'>
                <div className='item-quantity'>You have {item.quantity} item</div>
                <div className='message-box'>
                    <BsExclamationTriangle className='icon'/> 
                    <div className='text'>Low inventory!</div>
                </div>
            </div>
            :
            <div className='item-quantity'>You have {item.quantity} items</div>
        const date = new Date(item.expirationDate);
        let dateDiv;
        if (date.toDateString() === "Wed Dec 31 1969") {
            dateDiv = <div className='item-box-expiration'>No expiration date.</div>
        } else {
            if (date < new Date()) {
                dateDiv = <div className='item-box-expiration expired'>This product expired on {date.toDateString()}.</div>
            } else {
                dateDiv = <div className='item-box-expiration'>This product will expire on {date.toDateString()}.</div>
            }
        }
        return (
            <div className={`item-box ${this.props.item.type}`}
                id = {item._id}
                draggable={this.props.draggable}
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
                // className = {this.props.item.type}
           >
                <div className='item-box-link'>
                   
                    <div className='item-name'>
                        {item.name.toUpperCase()}
                       
                    </div>
                    {quantities}
                </div>
                {dateDiv}
                <div className='gear-box' onClick={() => {
                    this.props.openModal('edit', item._id);
                }}>
                    Edit 
                    {/* <BsGearFill className='gear'  /> */}
                </div>
           </div>
        )
    }
}
export default ItemShow;