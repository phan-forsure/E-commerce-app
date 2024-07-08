import React from 'react'
import Nav from './About'
import Main from './Main'
import Products from './Products'
import ScrollUp from '../ScrollUp';

const Home = () => {
    return (
        <>
        <ScrollUp />
        <Main />
        <Nav />
        <Products />
        </>
    )
}

export default Home