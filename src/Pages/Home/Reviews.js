import React from 'react';


const Reviews = ({review}) => {
    return (
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
          
  <div class="card-body">
  <p>{review.des}</p>
  <div className='flex items-center mt-10'>
  <div class="avatar">
  <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 mr-5">
    <img src={review.img} />
  </div>
</div>
    <div>
    <h2 class="card-title">{review.name}</h2>
    <p>{review.title}</p>
    </div>
  </div>
   
  </div>
</div>

            {/* <div className="card w-96 bg-base-100 shadow-xl">
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
 
</div> */}
        </div>
    );
};

export default Reviews;