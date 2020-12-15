import React from 'react';
import { Link } from 'react-router-dom';
import error_pic from "../../images/error_page.png"

class PageNotFound extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div className='page_not_found_container'>
                <div className='container'>
                    <div className='image_container'>
                        <img src={error_pic}/>
                    </div>
                    <div className='message'>Whoops! Let's try that again...</div>
                    <Link to='/'><button className="home_redirect">Home</button></Link>
                </div>
            </div>
        )
    } 
}


export default PageNotFound;