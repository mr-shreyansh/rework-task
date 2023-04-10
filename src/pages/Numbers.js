import Stats from "../components/Stats";
import credit from "../assets/images/credit.jpg";
const Numbers = () => {
    return ( 
        <div className="flex flex-col w-[100vw] items-center justify-center">
            <h1 className="text-2xl font-light text-center py-3 mt-9">Numbers speak about us!</h1>
             <div className="flex flex-col-reverse md:flex-row">
                <Stats/>
                <img src={credit} alt="asdf"/>
             </div>
        </div>
     );
}
 
export default Numbers;