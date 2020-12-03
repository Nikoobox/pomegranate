import React from 'react';
import { Link } from 'react-router-dom';
import ItemEdit from './../item_edit/item_edit';

class ItemShow extends React.Component {

    render() {
        const { item } = this.props;
        const date = new Date(item.expirationDate);
        <ItemEdit item={item} />
        return (
           <div>
                <Link to={`item/${item._id}/edit`}>
                    <h1>{item.name}</h1>
                    <p>You have {item.quantity} of this item.</p>
                </Link>
                <p>This item will expire on {date.toDateString()}.</p>


                
           </div>
        )
    }
}

export default ItemShow;
