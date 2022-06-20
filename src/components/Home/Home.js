import React from 'react';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import Hero from '../Header/Hero/Hero';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className='main-container'>
            <Hero />
            <Services />
            <Doctor />
            <Contact />
        </div>
    );
};

export default Home;