import InfoCard from "../components/Info_card";
import tablet from "../assets/images/tablet.jpg";
import mac from "../assets/images/mac.jpg";
import projector from "../assets/images/projector.jpg";
import danger from "../assets/images/danger.jpg";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'


const Reads = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div>
            <h1 className="text-3xl font-light text-center my-9">Insightful Reads - <span className="text-orange-400">mFiterlt</span></h1>
            <div className="w-[100vw] flex justify-end">

            <Carousel responsive={responsive}
            infinite={true}
            className="w-full flex flex-row "
            itemClass="carousel-item"
            >
                <InfoCard pic={tablet} info={"Lorem ipsum dolor sit amet, sed nisl."}/>
                <InfoCard pic={mac} info={"Lorem ipsum dolor sit amet, consectetur  nisl."}/>
                <InfoCard pic={projector} info={"Lorem ipsum dolor sit amet,  sed nisl."}/>
                <InfoCard pic={danger} info={"Lorem ipsum dolor sit amet, consectetur  nisl."}/>
</Carousel>;

            </div>
        </div>
    );
}

export default Reads;