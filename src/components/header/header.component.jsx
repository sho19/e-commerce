import "./header.styles.scss";
import {Link} from "react-router-dom";
import React from "react";
import {ReactComponent as Logo} from "../../assests/crown.svg";

const Header=()=>(
    <div className="header">
        <Link to={"/"}  className="logo-container">
            <Logo classname="logo"/>
        </Link>
        <div className="options">
            <Link to={"/shop"} className="option">SHOP</Link>
            <Link to={"/contact"} className="option">CONTACT</Link>
        </div>
    </div>
);

export default Header;