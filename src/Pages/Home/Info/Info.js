import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
        <div className="card card-side bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500">
        <figure className='pl-5'>
            <img src={clock} alt="Movie" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Opening Hours </h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
        </div>
            
        <div className="card card-side bg-base-100 shadow-xl bg-neutral">
        <figure className='pl-5'>
            <img src={location} alt="Movie" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Visit our location </h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
        </div>
            
        <div className="card card-side bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500">
        <figure className='pl-5'>
            <img src={phone} alt="Movie" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Contact us now</h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
      </div>
    </div>
    );
};

export default Info;