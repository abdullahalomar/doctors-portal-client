import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;