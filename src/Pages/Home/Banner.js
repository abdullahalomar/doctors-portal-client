import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import StartedBtn from '../../components/StartedBtn';


const Banner = () => {
    return (
        <div style={{
          background: `url(${bg})`
        }}>
          <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className=" rounded-lg lg:max-w-lg sm:max-w-sm shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
      <StartedBtn>GET STARTED</StartedBtn>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;