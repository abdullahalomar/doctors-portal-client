import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-secondary">{name}</h2>
    <div>
        {
            slots.length > 0 ? <p>{slots[0]}</p> : <p className='text-red-400'>Please, Try another date.</p>
        }
    </div>
    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
    <div className="card-actions justify-center">
      {
        slots.length > 0 
        ? 
        <label for="booking-modal" className="btn btn-secondary uppercase text-white" onClick={()=>setTreatment(service)}>Book Appointment</label>
        : 
        <button className="btn btn-secondary uppercase text-white" disabled>Book Appointment</button>
      }
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;