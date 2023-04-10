import Carousel from "react-multi-carousel";

import flipkart from '../assets/images/flipkart.jpg';
import icici from '../assets/images/icici.jpg';
import amazon from '../assets/images/amazon.jpg';
import mc from '../assets/images/mc.jpg';
import fevi from '../assets/images/fevicol.jpg';
import uniliver from '../assets/images/Unilever.jpg';
import hdfc from '../assets/images/hdfc.jpg';

const Brands = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            
            <h1 className="text-xl text-center mt-9 py-5">Trusted by</h1>

            <Carousel responsive={responsive}

                infinite={true}
                className="w-full flex flex-row "
                itemClass="carousel-item"
            >
             <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-1">
              <img src={flipkart} alt="flipkart" className="w-40 h-20"/>
              <img src={icici} alt="icici" className="w-40 h-20"/>
              <img src={amazon} alt="amazon" className="w-40 h-20"/>
                </div>
                <div className="flex flex-row gap-1">

              <img src={mc} alt="mc" className="w-20 h-20"/>
              <img src={fevi} alt="fevi" className="w-20 h-20"/>
              <img src={uniliver} alt="uniliver" className="w-20 h-20"/>
              <img src={hdfc} alt="hdfc" className="w-40 h-20"/>
              <img src={fevi} alt="fevi" className="w-20 h-20"/>
                </div>
             </div>
            </Carousel>;
        </div>
    );
}

export default Brands;