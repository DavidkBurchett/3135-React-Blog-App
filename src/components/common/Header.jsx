import React from "react";
import './Header.css'
import { Link } from 'react-router'
import { useAuth, useUsername } from "../authWrapper/AuthContext";

export function Header () {
    const username = useUsername();
    const {logout} = useAuth();
    return (
        <div class = "header">
            <h1> My Blog </h1>
            <nav>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
                <li> <Link to="/posts">Blog Posts</Link> </li>
                <li> 
                    {/* <Link to="/login">Login</Link>  */}
                    {username ? <Link to="/" onClick={logout}>Log out</Link> : <Link to="/login">Login</Link>}
                </li>
            </nav>
        </div>

    )
}