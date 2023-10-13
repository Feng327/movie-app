import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";

const MovieDisplay = () => {
    const [endpoint, setEndpoint] = useState("now_playing");
    const [selectedTab, setSelectedTab] = useState("Now Playing"); // Add selectedTab state
    const { data, loading } = useFetch(`/movie/${endpoint}?page=1&per_page=12`); // Update the API endpoint
    const onTabChange = (tab) => {
        let endpoint = "now_playing";
        switch (tab) {
            case "Now Playing":
                endpoint = "now_playing";
                break;
            case "Popular":
                endpoint = "popular";
                break;
            case "Top Rated":
                endpoint = "top_rated";
                break;
            case "Upcoming":
                endpoint = "upcoming";
                break;
            default:
                // Handle any other tabs or invalid cases
                break;
        }
        setEndpoint(endpoint);
        setSelectedTab(tab); // Update selectedTab when the tab changes
    };
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">{selectedTab}</span>
                <SwitchTabs
                    data={["Now Playing", "Top Rated", "Popular", "Upcoming"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint='movie'/>
        </div>
    );
};
export default MovieDisplay;