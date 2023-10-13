import React from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";

import MovieDisplay from "./movieDisplay/MovieDisplay";
const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <MovieDisplay/>
        </div>
    );
};

export default Home;
