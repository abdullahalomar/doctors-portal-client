import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Treatment from './Tratment';
import MakeAppoinment from './MakeAppoinment';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='mx-12'>
            <Banner/> 
            <Info/>
            <Services/>
            <Treatment/>
            <MakeAppoinment/>
            <Testimonials/>
        </div>
    );
};

export default Home;    