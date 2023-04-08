import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';

const AvailableAppointments = ({date}) => {
    const [ treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'pp');
    const {data: services, isLoading, refetch} = useQuery([, formatedDate], ()=> fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(response=> response.json())
        )

        if (isLoading) {
            return <Loader></Loader>
        }

    return (
        <div className='my-20'>
            <h1 className='text-xl text-center text-secondary font-bold my-10'>Available Services on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service=> <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal 
            date={date} 
            treatment={treatment} 
            setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;