import React from 'react'
import { Header, Footer } from '../'

export const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}
