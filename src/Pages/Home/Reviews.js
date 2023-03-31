import React from 'react';


const Reviews = ({review}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <p>{review.des}</p>
  <div className='flex'>
  <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={review.img} />
  </div>
</div>
<div className="card-body items-center text-center">
    <h2 className="card-title">{review.name}</h2>
    <p>{review.title}</p>
    
  </div>
  </div>
 
</div>
        </div>
    );
};

export default Reviews;