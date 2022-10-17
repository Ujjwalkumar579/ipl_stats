import React from 'react'
import './Header.css'
import IPL_LOGO from "../../imgs/ipl_logo.png";

const Header = () => {
    return (
        <div><img src={IPL_LOGO} className="img-fluid ipl_logo" alt="" /></div>
    )
}

export default Header