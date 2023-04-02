import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment;

  const handleBooking = event => {
    event.preventDefalut();
    const slot = event.target.slot.value;
    console.log(slot);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">{name}</h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="grid grid-cols-1 gap-5 justify-items-center mt-5"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-lg"
            />
            <select name="slot" class="select select-bordered w-full max-w-lg">
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered w-full max-w-lg"
            />
            <input
              type="text"
              placeholder="Phone number"
              class="input input-bordered w-full max-w-lg"
            />
            {/* <input
              type="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-lg"
            /> */}
            <input
              type="submit"
              value="submit"
              class="btn btn-accent w-full max-w-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
