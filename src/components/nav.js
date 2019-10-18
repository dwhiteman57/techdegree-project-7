import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Nav extends Component {
    search = e => {
        this.props.onSearch(e.target.innerText);
    }


    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><Link to='/' style={{ backgroundColor: '#999', color: '#000' }}>Home</Link></li>   
                    <li><Link to='/mountains' onClick={this.search}>Mountains</Link></li>
                    <li><Link to='/cats' onClick={this.search}>Cats</Link></li>
                    <li><Link to='/dog'  onClick={this.search}>Dog</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;



    