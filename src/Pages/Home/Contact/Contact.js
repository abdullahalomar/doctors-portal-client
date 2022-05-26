import React from 'react';
import appoinment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }}
            className='text-center mt-24 py-10'>
            <div>
            <h3 className='font-bold text-xl text-success'>Contact Us</h3>
            <h1 className='text-4xl text-white my-5'>Stay connected with us</h1>
            </div>
            <div>
                <input type="email" placeholder="Email Address" className="input input-bordered input-lg w-full max-w-lg" />
                    <br /><br />
                <input type="text" placeholder="subject" className="input input-bordered input-lg w-full max-w-lg" />
                     <br /><br />
                <textarea className="textarea textarea-bordered w-full max-w-lg" placeholder="Your Message"></textarea>
                
            </div>
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-#19D3AE to-#0FCFEC mt-5">Submit</button>
        </section>
    );
};

export default Contact;