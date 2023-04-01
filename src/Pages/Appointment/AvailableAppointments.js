import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [ services, setServices ] = useState([]);
    const [ treatment, setTreatment] = useState(null);

    useEffect(()=>{
        fetch('services.json')
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
                    treatment={treatment}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;