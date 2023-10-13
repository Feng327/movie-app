import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">Contact Us</li>
                </ul>
                <div className="infoText">
                   This website is built for educational purpose only.<br></br>
                   FWDP 2023 Yafeng & Yilin
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
