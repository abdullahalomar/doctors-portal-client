import React from 'react';

const InfoCard = ({img, title, bg}) => {
    return (
        <div class={`card lg:card-side bg-accent shadow-xl text-white ${bg}`}>
  <figure className='pl-10 pt-5'>
    <img src={img} alt="Album"/>
    </figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
   
  </div>
</div>
    );
};

export default InfoCard;