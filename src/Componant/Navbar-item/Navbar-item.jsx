import React from "react";

const NavbarItem = (props)=>{
    return(
        <li className="nav-item text-white text-lg mx-6 py-2">
            {props.children}
        </li>
    )
}

export default NavbarItem;