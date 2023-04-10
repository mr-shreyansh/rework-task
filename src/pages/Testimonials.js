import React from 'react';

import stazplay from '../assets/images/stazplay.png';
import careem from '../assets/images/careem.png';
import vilrginn from '../assets/images/vilrginn.png';
import pidilite from '../assets/images/pidilite.png';
import Testimonial_card from '../components/Testimonial_card';

const Testimonials = () => {
    return ( 
        <div className='flex flex-col justify-center items-center'>
        <div className="flex justify-center gap-2 items-center my-9">
            <h1 className="text-2xl font-light ">Testimonials</h1>
            <p className="text-5xl font-light text-orange-500">|</p>
            <p className="text-md font-light">What recruiters have to<br></br> say about mFiterit</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center my-9'>
            <Testimonial_card pic={stazplay} name={"Hamad Malik"} pos={"CMO"}/>
            <Testimonial_card pic={careem} name={"Hamad Malik"} pos={"CMO"}/>
            <Testimonial_card pic={pidilite} name={"Hamad Malik"} pos={"CMO"}/>
            <Testimonial_card pic={vilrginn} name={"Hamad Malik"} pos={"CMO"}/>

        </div>
        <button className="text-sm outline outline-2 outline-offset-0 p-1 outline-orange-500 rounded-md hover:bg-orange-500 transition-all w-40">
                                View More
                            </button>
    </div> 
     );
}
 
export default Testimonials;