import React from 'react';
import Select from 'react-select';
import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

class ItemEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            quantity: "",
            expirationDate: "",
            type: ""
        }
        this.checkEmptyState = this.checkEmptyState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.updateType = this.updateType.bind(this);
    }

    componentDidMount() {
        if (this.props.item && this.checkEmptyState()) {
            this.setState({
                name: this.props.item.name,
                quantity: this.props.item.quantity,
                expirationDate: this.formatDate(this.props.item.expirationDate),
                type: this.props.item.type,
            })
        }
    }

    checkEmptyState() {
        if (this.state.name === ""
            && this.state.quantity === ""
            && this.state.expirationDate === ""
            && this.state.type === ""
        ) {
            return true;
        } else {
            return false;
        }

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    updateType(e) {
        this.setState({
            type: e.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.editItem(Object.assign( this.state, { quantity: String(this.state.quantity), _id: this.props.itemId }))
            .then(res => {
                if (res.type === "RECEIVE_ITEM") {
                    this.props.closeModal();
                }
            });
        
    }

    handleDelete() {
        this.props.deleteItem(this.props.itemId)
            .then(this.props.closeModal()); 
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`} className='error'>
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    formatDate(date) {
        const rawDate = new Date(date);
        const numSeconds = 8640000;
        const newDate = new Date(rawDate.getTime() + numSeconds);
        let year = newDate.getFullYear();
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    }

    render() {
        const customStyles = {
            control: base => ({
                ...base,
                border: '2px solid black',
                boxShadow: 'none',
                borderRadius: 16,
                padding: '4px'
            })
        };

        const options = [
            { label: "Fruits and vegetables", value: "Fruits and vegetables" },
            { label: "Dairy", value: "Dairy", className: 'custom-class' },
            { label: "Meat", value: "Meat" },
            { label: "Grains", value: "Grains" },
            { label: "Beverages", value: "Beverages" },
            { label: "Misc", value: "Misc" }]

        let disabled;

        if (this.state.name === "" || this.state.quantity === "" || this.state.type === "") {
            disabled = true;
        } else {
            disabled = false;
        }
        
        return (
            <div className="item-edit-page">
                <form onSubmit={this.handleSubmit} className='item-edit-form'>
                    <div className='close' onClick={() => this.props.closeModal()}><AiOutlineClose/></div>
                    <div className='welcome-message'>EDIT ITEM FORM</div>
                    <div className='label'>
                        ITEM NAME
                    </div> 
                    <input type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                        placeholder="Enter name"
                    />
                    <div className='label'>
                        QUANTITY
                    </div>
                    <input type="number"
                        value={this.state.quantity}
                        onChange={this.update('quantity')}
                        placeholder="Enter quantity"
                    />
                    <div className='label'>
                        EXPIRATION DATE
                    </div>
                    <input type="date"
                        value={this.state.expirationDate}
                        onChange={this.update('expirationDate')}
                        placeholder="Enter date"
                    />                  
                    <div className='label'>
                        TYPE
                    </div>    
                    <Select
                        styles={customStyles}
                        options={options}
                        placeholder={this.state.type === '' ? 'Select an item type' : this.state.type}
                        value={this.state.type}
                        onChange={this.updateType}
                    />
                    <input
                        type="submit"
                        value="EDIT ITEM"
                        className='edit-item-btn-container'
                        disabled={disabled} />
                    
                    <div className='delete-item-btn-container'>
                        <button
                            onClick={this.handleDelete}
                            type="button"
                        >
                            DELETE ITEM
                        </button>
                    </div>
                    {/* <div className='error-container'>
                        {this.renderErrors()}
                    </div> */}
                </form>
            </div>
        );
    }
}

export default ItemEdit;