import { useState, useEffect } from "react";

import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
// import Header from "./components/header/Header";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration } from "./store/homeSlice";
import { useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch(getApiConfiguration);
    const {url}= useSelector((state)=>state.home);
    console.log(url);
    useEffect(()=>{
      apiTesting();
    },[]);

    const apiTesting =()=>{
      fetchDataFromApi("/movie/popular".then((res)=>{
        console.log(res);
      }))
    };
    return <div>App</div>
}

export default App