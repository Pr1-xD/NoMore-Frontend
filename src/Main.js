import React from 'react';
import Home from './Home';
import Nav from './Nav'
import Section from './Section'
import SectionTwo from './SectionTwo'

function Main(props) {
    return (
        <div>
        <Nav/>
        <Home/>
        <Section/>
        <SectionTwo/>
        </div>
    );
}

export default Main;