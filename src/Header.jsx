import React from "react";
import logo from "./Images/logo.png";

const Header=()=>{
    return(
        <>
        <div className="header">
        <img src={logo} alt="logo" width='45' height='50' />
        <h1>Keep</h1>

        </div>
        </>
    )
};

export default Header;