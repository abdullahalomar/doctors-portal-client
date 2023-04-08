import React from 'react';
import Service from './Service';
import flouride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitning from '../../assets/images/whitening.png';


const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: flouride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitning
        }
    ];

    return (
        <div className='my-20'>
            <div className='text-center'>
            <h3 className='text-primary font-bold uppercase'>Our Services</h3>
            <h3 className='text-2xl'>Services We Provide</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;