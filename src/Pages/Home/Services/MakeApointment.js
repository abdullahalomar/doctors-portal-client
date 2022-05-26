import React from 'react';
import doctorSmall from '../../../assets/images/doctor-small.png'
import appoinment from '../../../assets/images/appointment.png'

const MakeApointment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }}
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={ doctorSmall} alt="" />
            </div>
            <div className='flex-1 mx-7 my-7'>
                <h3 className='text-xl text-success font-bold mb-4'>Appointment</h3>
                <h2 className='text-white text-4xl'>Make an appointment Today</h2>
                <h6 className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</h6>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-#19D3AE to-#0FCFEC mt-5">Get Started</button>
            </div>
            
        </section>
    );
};

export default MakeApointment;