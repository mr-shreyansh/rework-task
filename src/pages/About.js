import React from 'react';

import ml from '../assets/images/AI_ML.png';
import chip from '../assets/images/chip.png';
import timer from '../assets/images/timer.png';
import axel from '../assets/images/axel.png';

const About = () => {
    return ( 
        <div>
            <h1 className="text-2xl text-center font-light mt-9 py-5">Who we are</h1>
            <div className="flex flex-col md:flex-row md:justify-around">
                <div className="flex flex-col gap-2 justify-center items-center md:w-[30vw]">
                   <p className='p-3 max-w-[450px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed euismod, nisl nec aliquam aliquam, nisl nisl aliquet
                    nisl, nec aliquam nisl nisl sed nisl. Sed euismod, nisl nec
                    aliquam aliquam, nisl nisl aliquet nisl, nec aliquam nisl
                    nisl sed nisl. Sed euismod, nisl nec aliquam aliquam, nisl
                   </p>
                   <button className="outline px-4 py-1 mt-4 rounded hover:bg-orange-500 hover:text-white transition-all outline-orange-500 text-orange-500 text-center">About Us</button>
                </div>

                <div className='grid grid-cols-2 gap-9 '>
                    <div className='flex flex-col items-center p-5'>
                    <img className='' height={50} width={50} src={ml} alt="about" />
                    <p className='text-xs text-center py-1'>power of AI ML</p>
                    </div>
                    <div className='flex flex-col items-center p-5'>
                    <img className='' height={50} width={50} src={chip} alt="about" />
                    <p className='text-xs text-center py-1'>power of AI ML</p>
                    </div>
                    <div className='flex flex-col items-center p-5'>
                    <img className='' height={50} width={50} src={timer} alt="about" />
                    <p className='text-xs text-center py-1'>power of AI ML</p>
                    </div>
                    <div className='flex flex-col items-center p-5'>
                    <img className='' height={50} width={60} src={axel} alt="about" />
                    <p className='text-xs text-center py-1'>power of AI ML</p>
                     </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;