import React from 'react';
import { Link } from 'react-router-dom';

class ItemShow extends React.Component {

    render() {
        console.log(this.props);
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
                dateDiv = <div className='item-box-expiration expired'>This product expired on<br />{date.toDateString()}.</div>
            } else {
                dateDiv = <div className='item-box-expiration'>This product will expire on<br />{date.toDateString()}.</div>
            }
        }
        return (
           <div className='item-box'>
<<<<<<< HEAD
                <Link to={`/item/${item._id}/edit`} className='item-box-link' onClick={() => this.props.openModal('edit')} >
=======
                <div className='item-box-link' onClick={() => this.props.openModal('edit')} >
>>>>>>> e23dafaa9d0e64c90a26db5662ea818a8bf2c7f2
                {/* <button className='item-box-link' onClick={() => {
                debugger
                   return this.props.openModal('edit', item._id)
                }}> */}
                    
                    <div className='item-name'>{item.name}</div>
                    {quantities}
                {/* </button> */}
                </div>
                {dateDiv}
           </div>
        )
    }
}

export default ItemShow;
