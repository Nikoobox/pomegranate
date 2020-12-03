import React, { Component } from 'react'

export class ItemShow extends React.Component {
    componentDidMount() {
        this.props.getItem(this.props.id)
    }

    render() {
        return (
           <div>
               <h1>{this.props.item.data.name}</h1>
                 {/* <p>You have {this.props.item.quantity} of this item.</p> */}
           </div>
        )
    }
}

export default ItemShow;
