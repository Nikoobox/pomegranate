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
        return (
           <div className='item-box'>
                <Link to={`item/${item._id}/edit`} className='item-box-link'>
                    <div className='item-name'>{item.name}</div>
                    {quantities}
                </Link>
                <div className='item-box-expiration'>This product will expire on {date.toDateString()}.</div>     
           </div>
        )
    }
}

export default ItemShow;
