import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'


export default function NavBar() {
    return (
        <div className="bar">
            <div className="Link">
                <NavLink activeClassName="main" to="/mainpage">Main Page</NavLink>
                <NavLink activeClassName="main" to="/login">Login</NavLink>
                <NavLink activeClassName="admin" to="/createpost">Create Post</NavLink>
            </div>
        </div>
    )
}