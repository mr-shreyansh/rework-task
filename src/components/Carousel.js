
import React, { useState } from 'react';

import marketer from '../assets/images/marketer.svg';
import problem from '../assets/images/problem.svg';
import rise from '../assets/images/Rise.svg';
import superhero from '../assets/images/Superhero.svg';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';

const Carousel = () => {
    const slides = [marketer, problem, rise, superhero];
    const headings = ["Be a Smart Digital Marketer", "We are We are the Superhero of the Digital Ad World", "Boost Digital Ad Performance", "We are the Superhero of the Digital Ad World"];
    const subHeadings = ["We create innovative marketing solutions for cost consious marketers who does not compromise on the results!", "We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!", "We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!", "We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!"];
    const [current, setCurrent] = useState(0);


    const delay =3500;
    
    const [index, setIndex] = useState(0);
    const timeoutRef = React.useRef(null);
    
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
            setIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            ),
            delay
        );
        
        return () => {
            resetTimeout();
        };
    }, [index]);

//

    const leftShift = () => {
        setIndex(index === 0 ? slides.length - 1 : index - 1);

    }

    const rightShift = () => {
        setIndex(index === slides.length - 1 ? 0 : index + 1);
    }

    return (
        <div className='flex w-[100vw] justify-around group' >
            <div className='w-[70vw] flex flex-col sm:flex-row justify-between'>
                <img src={slides[index]} alt="logo" className='w-full h-[40vh] sm:w-[50%] sm:h-[60vh]' />
                <div className='flex flex-col justify-center items-center sm:items-start sm:w-[40%]'>
                    <h1 className='text-4xl font-light'>{headings[index]}</h1>
                    <p className='font-light text-gray-700 sm:pt-5'>{subHeadings[index]}</p>
                </div>
            </div>
            <div className='hidden group-hover:block transition-all absolute top-[40%] -translate-x-0 translate-y-[-50%] left-5 text-xs rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={leftShift} className='text-3xl text-gray-500'/>
            </div>
            <div className='hidden group-hover:block transition-all absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-xs rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={rightShift} className='text-3xl text-gray-500'/>
            </div>
        </div>
    );
}

export default Carousel;