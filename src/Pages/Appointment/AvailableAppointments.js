import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {

    const [treatment, setTreatment] = useState(null);
    const [services, setServices] = useState([]);

    const formatedDate = format(date, 'PP');

    // const {data: services, isLoading} =useQuery('available', formatedDate, () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //     .then(response => response.json())
    const formattedDate = format(date, 'PP');
    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // )
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    
    return (
        <div>
            <h2 className='text-xl text-primary text-center my-12'>Available Appointments on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
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
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;