import React, { useState }from 'react';
import { ReactDOM } from 'react';
import "./style.scss";
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import tmdbLogo from "../../assets/tmdb-logo.svg"



const About=()=>{
  return (
    <div className="about">
           <ContentWrapper>
                <h1 className="title">About Us</h1>
                <p className="content">Our movie database app is built with React.js. We wanted to create a platform that allows movie enthusiasts like us to discover, explore, 
                   and enjoy a vast collection of movies from different genres, eras, and cultures. In the future, we have exciting plans to enhance the app with additional features, including backend functionality. 
                   We're committed to continuously improving and expanding our app to make it the ultimate destination for movie lovers. Your feedback and suggestions are invaluable to us, and we're excited 
                   to embark on this cinematic journey with you.</p>
                   <div className="citation">
                   <p className="disclaimer">This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                   <img src={tmdbLogo} alt="A TMDB Logo" className="tmdb-logo" />
                   </div>

            </ContentWrapper>
    </div>
  )
}

export default About