import React from 'react';
import { Link } from 'react-router-dom';
import { BsGearFill, BsExclamationTriangle  } from "react-icons/bs";
// import { withRouter } from 'react-router-dom';

class ItemShow extends React.Component {
    render() {
        // console.log(this.props);
        const { item } = this.props;
        const quantities = item.quantity === 1 ?
            <div className='low-quantity-box'>
                <div className='item-quantity'>You have {item.quantity} item</div>
                <div className='message-box'>
                    <BsExclamationTriangle className='icon'/> 
                    <div className='text'>Low inventory warning</div>
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
                dateDiv = <div className='item-box-expiration expired'>This product expired on<br />{date.toDateString()}.</div>
            } else {
                dateDiv = <div className='item-box-expiration'>This product will expire on<br />{date.toDateString()}.</div>
            }
        }
        return (
           <div className='item-box'>
                <div className='item-box-link' onClick={() => {
                    this.props.openModal('edit', item._id);
                }}>
                <BsGearFill className='gear'/>
                    <div className='item-name'>{item.name}</div>
                    {quantities}
                </div>
                {dateDiv}
                
           </div>
        )
    }
}
export default ItemShow;