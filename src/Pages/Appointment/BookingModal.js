import { format } from "date-fns";
import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from 'react-toastify';


const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formatedDate = format(date, 'PP');

  const handleBooking = event =>{
    event.preventDefault();
    console.log(event.target.slot.value);
    const slot = event.target.slot.value;
   
    const booking = {
      treatmentId : _id,
      treatment: name,
      date: formatedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value
    }

    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data=> {
      console.log(data);
      if (data.success) {
        toast(`Appointment is set , ${formatedDate} at ${slot}`)
      }
      else{
        toast.error(`Already have an Appointment on, ${data.booking?.date} at ${data.booking?.slot}`)
      }
      refetch();
      setTreatment(null);
    })
  }


  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-5 justify-items-center mt-5"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-lg"
            />
            <select name="slot" className="select select-bordered w-full max-w-lg">
              {
                slots.map((slot, index) => <option 
                key={index}
                value={slot}
                >{slot}</option>)
              }
            </select>
            <input
              type="text"
              disabled
              value={user?.displayName || ''}
              className="input input-bordered w-full max-w-lg"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name='phone'
              className="input input-bordered w-full max-w-lg"
            />
            <input
              type="email"
              disabled
              value={user?.email || ''}
              className="input input-bordered w-full max-w-lg"
            />
           
            <input
              type="submit"
              value="submit"
              className="btn btn-accent w-full max-w-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
