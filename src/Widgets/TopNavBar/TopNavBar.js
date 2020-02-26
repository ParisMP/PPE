import React from 'react';
import './TopNavBar.css';
import logo from './logo.png';

const Topnav = props => (
    <header className="Topbar">
        <br></br>
        <b class="bold" href="/">AGRICOOK</b>
        <img src={logo} alt="Logo" 
        width="5%"
        />
        <br></br>
        <div className="toolbar_widget_list">
            <ul>
                
            </ul>
        </div>
    </header>
);

export default Topnav;