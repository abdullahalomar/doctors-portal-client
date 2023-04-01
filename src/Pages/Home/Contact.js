import React from 'react';
import bg from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div
        style={{
            background: `url(${bg})`
        }}
        >
            
           <div className="hero min-h-screen">
  <div className="hero-content">
    <div className="card lg:w-96 md:w-48 sm:w-sm">
    <div className='text-center'>
            <h1 className='text-primary font-bold'>Contact Us</h1>
            <h1 className='text-3xl text-white'>Stay connected with us</h1>
            </div>
      <div className="card-body">
        <div className="form-control">
          <input type="email" placeholder="email address" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="subject" className="input input-bordered" />
        </div>
        <div className="form-control">
          <textarea name="" id="" cols="30" rows="10" placeholder="your message" className="input input-bordered"></textarea>
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;