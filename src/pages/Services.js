import ServiceCard from "../components/ServiceCard";
import ecommerce from "../assets/images/ecommerce.jpg";
import brand from "../assets/images/Brand.jpg";
import mobile from "../assets/images/mobile.jpg";
import ad from "../assets/images/ad.jpg";
const Services = () => {
    return ( 
        <div className="m-2 ">
            <h1 className="text-3xl font-light self-center text-center py-5">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
                <ServiceCard pic={ecommerce} title={"eCommerce Competitive Analitics"} text={"Map you brand to the eCommerce landscape to enhance market share with real-time market intelligence"}/>
                <ServiceCard pic={brand} title={"Brand Health Analysis"} text={"Map you brand to the eCommerce landscape to enhance market share with real-time market intelligence"}/>
                <ServiceCard pic={mobile} title={"Mobile App Marketing"} text={"Map you brand to the eCommerce landscape to enhance market share with real-time market intelligence"}/>
                <ServiceCard pic={ad} title={"Digital Ad Management"} text={"Map you brand to the eCommerce landscape to enhance market share with real-time market intelligence"}/>
            </div>
        </div>
     );
}
 
export default Services;