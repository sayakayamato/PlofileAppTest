import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { CookiesProvider } from "react-cookie";
import "./index"


import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Nav } from "./components/Nav"

export const App = () => {

    return(
        <>
        <div className="container">
        <BrowserRouter>
                <Header />
            
                <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route path="/ranking" element={<Ranking />} /> */}
                {/* <Route path="/create" element={<Create />} />
                <Route path="/info" element={<Info />} /> */}
                </Routes>
                
                <Nav />

        </BrowserRouter>
        </div>
        </>
    )
}
