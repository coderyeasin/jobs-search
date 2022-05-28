import React from 'react';
import Categories from '../Categories/Categories';
import Companies from '../Companies/Companies';
import CreateProfile from '../CreateProfile/CreateProfile';
import HeroSection from '../HeroSection/HeroSection';
import HowWorks from '../HowWorks/HowWorks';
import Footer from '../Shared/Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
    return (
        <div className=''>
            <HeroSection />
            <Companies />
            <Categories />
            <CreateProfile />
            <HowWorks />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;