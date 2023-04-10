const ServiceCard = ({pic,title,text}) => {
    return ( 
        <div className="flex flex-col md:flex-row border rounded-2xl max-w-[600px] justify-center items-center hover:border-red-300 transition-all hover:scale-105 cursor-pointer">
            <img src={pic} alt="sdf" className="rounded-2xl"/>
            <div className="w-64 p-1">
            <h1 className="text-md ">{title}</h1>
            <p className="text-sm font-light text-gray-600">{text}</p>
            <p className="text-md font-light text-orange-600">Read More..</p>
            </div>
        </div>
     );
}
 
export default ServiceCard;