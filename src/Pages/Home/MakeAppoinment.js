import React from 'react';
import doctor from '../../assets/images/doctor.png';
import StartedBtn from '../../components/StartedBtn';
import appoinment from '../../assets/images/appointment.png';

const MakeAppoinment = () => {
    return (
        <section 
        style={{
            background: `url(${appoinment})`
        }}
        className='flex justify-center items-center my-40'>
            <div className='flex-1 lg:block hidden'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-primary mb-4'>Appointment</h1>
                <h1 className='text-3xl text-white'>Make an appointment Today</h1>
                <p className='text-white my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <StartedBtn>GET STARTED</StartedBtn>
            </div>
        </section>
    );
};

export default MakeAppoinment;