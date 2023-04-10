const InfoCard = ({pic,info}) => {
    return ( 
        <div className=" h-52 w-40 rounded-lg flex items-end brightness-75 hover:brightness-100 transition-all" style={{backgroundImage:`url(${pic})`}}>
            <p className=" text-white text-xs p-3 ">{info}</p>
        </div>
     );
}
 
export default InfoCard
