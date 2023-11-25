import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import logo from "./Logo.png"


const Header = () => {
    
    return (
        <div className="header">
            <div className="logo">
                <Link to="/"><img className="header__icon" src={logo} /></Link>
            </div>
            <div className="headerLeft">
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/tv/top_rated" style={{textDecoration: "none"}}><span>Tv Top Rated</span></Link>

            </div>
                <div className="about">
                <Link to="/about" style={{textDecoration: "none"}}><span><i class="fa-regular fa-face-smile"></i></span></Link>
                </div>
        </div>

    )
}

export default Header