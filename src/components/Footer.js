import React from 'react';

import logo from "../assets/images/logo.png";
import youtube from "../assets/images/youtube.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";


const Footer = () => {
    return ( 
        <div className='flex flex-col-reverse md:flex-row justify-around py-3 gap-5 items-center border rounded-lg mt-9'>
            <div className="flex flex-col items-center md:items-start justify-between gap-3">
                <div className="flex flex-col sm:flex-row lg:gap-9 sm:justify-around">
                    <div>
                        <h1 className='text-xs cursor-pointer'>Our Solutions</h1>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>Ad Traffic Validation</p>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>Brand Hygiene Protection</p>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>eCommerce Compititibve Analytices</p>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>Mobile Identity Solution</p>
                    </div>
                    <div>
                        <h1 className='text-xs cursor-pointer'>Quick Links</h1>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>About Us</p>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>Contact Us</p>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>Careers</p>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>CSR</p>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>Terms & Conditions</p>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>Privacy Policy</p>
                    </div>
                    <div>
                        <h1 className='text-xs  cursor-pointer'>Resources</h1>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>Blogs</p>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>Contact Us</p>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>Reports</p>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>Newsroom & Media</p>
                        <p className='text-xs font-light hover:text-orange-500 transition-all cursor-pointer'>PSU Solutions</p>
                     
                    </div>
                </div>
                <div>
                <img src={logo} alt="logo" className="w-30 h-10"/>
                 <p className='text-xs'>@2023 mFilterIt.All rights reserved</p>
                </div>
            </div>

            <div>
                <div className='flex gap-1 justify-around py-3'>
                 <img src={twitter} alt="twitter" className="w-6 h-6 cursor-pointer"/>
                 <img src={facebook} alt="facebook" className="w-6 h-6 cursor-pointer"/>
                 <img src={linkedin} alt="linkedin" className="w-6 h-6 cursor-pointer"/>
                 <img src={instagram} alt="instagram" className="w-6 h-6 cursor-pointer"/>
                 <img src={youtube} alt="youtube" className="w-6 h-6 cursor-pointer"/>
                </div>
                <div className='p-4 flex flex-col gap-5 py-4 justify-center items-center border max-w-[400px] rounded-lg'>
                    <h1>Sign Up For Our Newsletter *</h1>
                    <input type="text" placeholder="email address" className="w-80 h-10 rounded-lg bg-gray-100 text-center w-[80%] h-8"/>
                    <button className="outline outline-orange-500 text-orange-500 w-[60%] h-8 rounded-lg font-light hover:bg-orange-500 hover:text-white transition-all">Subscribe</button>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;