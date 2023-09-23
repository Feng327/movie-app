import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "../../assets/site-logo.png";


const Header =()=>{
    const [show, setShow] = useState("top");
    const navigate = useNavigate();
    const location = useLocation();
    const navigationHandler = (type) => {
        if (type === 'home'){
            navigate('/home')
        } else if (type ==='about'){
            navigate('/about')
        } else {
            navigate ('/favorites')
        }
    };
    return(
        <header>
          <div className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="This is a site logo" />
          </div>
          <ul className="menuItems">
                    <li
                        className="menuItem"
                        onClick={() => navigate("/")}
                    >
                       Home
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("favorites")}
                    >
                        Favorites
                    </li>
                  
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("about")}
                    >
                       About
                    </li>
                </ul>
        </header>
    )
}
export default Header;