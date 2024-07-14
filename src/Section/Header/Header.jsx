import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { NavbarItem } from "../../Componant/index";

const Header = () => {
    return (
        <div className="header flex justify-between flex-wrap items-end px-5 py-9">
            <div className="logo mx-3">
                <div className="logo-img">
                    <img src={require('../../img/simple-house-logo.png')} alt="logo" />
                </div>
                <div className="text text-white">
                    <h1 className="title-header">Simple House</h1>
                    <p className="text-header">new restaurant template</p>
                </div>
            </div>
            <nav className="navbar mx-5">
                <ul className="flex my-6">
                    <NavbarItem className='border-b border-current'>
                        <Link to='Simple_House/'>Home</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to='Simple_House/about'>About</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to='Simple_House/contact'>Contact</Link>
                    </NavbarItem>
                </ul>
            </nav>
        </div>
    )
}
export default Header;