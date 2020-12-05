import React from 'react';
import { Link } from 'react-router-dom';

class ItemShow extends React.Component {

    render() {
        const { item } = this.props;
        const quantities = item.quantity === 1 ? 
            <div className='item-quantity'>You have {item.quantity} item</div>
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
           <div className='item-box'>
                <Link to={`item/${item._id}/edit`} className='item-box-link'>
                    <div className='item-name'>{item.name}</div>
                    {quantities}
                </Link>
                {dateDiv}
           </div>
        )
    }
}

export default ItemShow;
