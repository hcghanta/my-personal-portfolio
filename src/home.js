import React from 'react'
import './App.css';
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";

function Home(){
    return(
        <div id="colorlib-page">
            <div id="container-wrap">
                <Sidebar></Sidebar>
                <div id="colorlib-main">
                    <Introduction></Introduction>
                    <About></About>
                    <Timeline></Timeline>
                </div>
            </div>
        </div>
    );
}

export default Home