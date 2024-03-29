import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <div
        className='mt-5'
        style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}
        >
            <footer class="footer p-10  text-base-content">
  <div>
    <span class="footer-title">Services</span> 
    <a class="link link-hover">Emergency Checkup</a> 
    <a class="link link-hover">Monthly Checkup</a> 
    <a class="link link-hover">Weekly Checkup</a> 
    <a class="link link-hover">Deep Checkup</a>
  </div> 
  <div>
    <span class="footer-title">ORAL HEALTH</span> 
    <a class="link link-hover">Fluoride Treatment</a> 
    <a class="link link-hover">Cavity Filling</a> 
    <a class="link link-hover">Teath Whitening</a> 
  </div> 
  <div>
    <span class="footer-title">OUR ADDRESS</span> 
    <a class="link link-hover">New York - 101010 Hudson</a> 
  </div>
</footer> 
<footer class="footer footer-center p-4  text-base-content">
  <div>
    <p>Copyright 2022 All Rights Reserved</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;