import React from 'react';
import Home from './Home';
import Nav from './Nav'
import Section from './Section'
import SectionTwo from './SectionTwo'
import Subsec from './Subsec'

function Main(props) {
    return (
        <div>
        <Nav/>
        <Home/>
        <Section/>
        <Subsec/>
        <SectionTwo/>
        </div>
    );
}

export default Main;