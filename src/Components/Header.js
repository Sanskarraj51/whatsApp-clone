import { Settings } from '@material-ui/icons';
import React from 'react';
import "./Header.css";



function Header() {
    return (
        <div className="header">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/WhatsApp_logo.svg/2560px-WhatsApp_logo.svg.png"
            alt=""
           />
           <div className="header__right" >
            <h3>Settings</h3>
            <Settings className="setttingicon" />
           </div>
        </div>
    )
}

export default Header;
