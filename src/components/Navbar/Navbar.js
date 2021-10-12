import React from 'react';
import "./Navbar.css";

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()} >
                <i className="fa fa-bars"></i>
                
                
            </div>
            <div className="navbar__left">
                <a href="#">Subscribers</a>
                <a href="#">Video management </a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    {/* <i className="fa fa-search"></i> */}
                    <i className="fas fa-search"></i>
                   
                </a>
                <a href="#">
                    <i className="fa fa-clock"></i>
                    
                </a>
                <a href="#">
                    <img width="30" src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__480.png" alt="" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;