import React from "react"
import { BrowserRouter } from 'react-router-dom';
// import { CookiesProvider } from "react-cookie";


import { Header } from "./components/Header"

export const App = () => {

    return(
        <>
        <BrowserRouter>
            <Header />
        </BrowserRouter>
        
        </>
    )
}
