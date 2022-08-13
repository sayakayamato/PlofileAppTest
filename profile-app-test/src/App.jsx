import React from "react"
import { BrowserRouter } from 'react-router-dom';
// import { CookiesProvider } from "react-cookie";
import "./index"


import { Header } from "./components/Header"

export const App = () => {

    return(
        <>
        <div className="container">
        <BrowserRouter>
            <Header />
        </BrowserRouter>
        </div>
        </>
    )
}
