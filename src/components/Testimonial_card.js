const Testimonial_card = ({ pic, name, pos }) => {
    return (
        <div className="flex flex-col max-w-[500px] border shadow-lg rounded-md p-6 hover:-translate-y-1 transition-all cursor-pointer">
            <div className="flex justify-start">
                <img src={pic} height={10} width={60} className="mb-3" alt="sfds" />
                <div>
                    <h1 className="text-md">{name}</h1>
                    <p className="text-md font-light text-gray-700">{pos}</p>
                </div>
            </div>
            <p className="text-sm font-light text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed auctor, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed auctor, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.</p>
        </div>
    );
}

export default Testimonial_card;