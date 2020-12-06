import React from 'react';
import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router-dom';


class Test extends React.Component {
    constructor(props) {
        super(props);
        // this.logoutUser = this.logoutUser.bind(this);
        // this.getLinks = this.getLinks.bind(this);
    }

    

   

    render() {
        return (
            <div className='test-container'>
                <h1>I am from Test JSX</h1>
            </div>
        );
    }
}

export default Test;