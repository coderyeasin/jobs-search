import React from 'react';
import Categories from '../Categories/Categories';
import Companies from '../Companies/Companies';
import CreateProfile from '../CreateProfile/CreateProfile';
import HeroSection from '../HeroSection/HeroSection';
import HowWorks from '../HowWorks/HowWorks';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import styles from '../../styles/Home.module.css'

const Home = () => {
    return (
        <div className=''>
        {/* <div className='px-[70px] py-[40px]'> */}
            {/* <Header /> */}
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