import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = event =>{
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot, name, _id);
    setTreatment(null);
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
            action=""
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
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-lg"
            />
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-lg"
            />
            <input
              type="email"
              placeholder="Email"
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
