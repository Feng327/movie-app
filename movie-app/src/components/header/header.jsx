import React, { useState, useEffect } from "react";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/site-logo.png";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    const openMobileMenu = () => {
        setMobileMenu(true);
    };

    const navigationHandler = (type) => {
        if (type === 'home'){
            navigate('/home')
        } else if (type ==='about'){
            navigate('/about')
        } else {
            navigate ('/favorites')
        }
        setMobileMenu(false);
    };

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
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

                <div className="mobileMenuItems">
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>
            </ContentWrapper>
           
        </header>
    );
};

export default Header;
