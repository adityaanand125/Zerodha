import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Starts from './Starts';
import Pricing from './Princing';
import EDucation from './Education';


import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function HomePage() {
    return (  
        <>
        
        <Hero/>
        <Awards/>
        <Starts/>
        <Pricing/>
        <EDucation/>
        <OpenAccount/>
        
        </>
    );
}

export default HomePage;