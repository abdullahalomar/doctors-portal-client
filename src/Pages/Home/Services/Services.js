import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
import MakeApointment from './MakeApointment';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatement',
            decscription: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Fluoride Filling',
            decscription: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teath Whitening',
            decscription: '',
            img: whitening
        }
    ];
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h2 className='text-primary font-bold uppercase'>Our Services</h2>
                <h2 className='text-2xl'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    services.map(service => <Service
                    key= {service._id}
                    service= {service}
                    ></Service>)
                }
            </div>
            <div className="hero min-h-screen my-20">
  <div className="hero-content flex-col lg:flex-row gap-28">
    <div>
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
    </div>
    <div>
      <h1 className="text-5xl font-bold">Exceptional Dental Care on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-#19D3AE to-#0FCFEC">Get Started</button>
    </div>
  </div>
</div>
            
<MakeApointment></MakeApointment>
</div>
    );
};

export default Services;