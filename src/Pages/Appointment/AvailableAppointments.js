import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointments = ({date}) => {
    const [ services, setServices ] = useState([]);
    const [ treatment, setTreatment] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(response=> response.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className='my-20'>
            <h1 className='text-xl text-center text-secondary font-bold my-10'>Available Services on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=> <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;