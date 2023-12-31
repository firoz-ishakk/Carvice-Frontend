
import React, { useEffect, useRef } from 'react';

function Body2() {
  const textRef = useRef(null);
  return (
    <div className="flex flex-col ">
        <div className="w-screen relative">
          <img src='\img\bert-b-3iv6ABEb3yU-unsplash.jpg'  className="object-cover w-fit h-screen md:w-full transition-all"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center" ref={textRef}>
            <h2 className="text-xl md:text-2xl mx-4 md:mx-10 font-serif">
              OUR MECHANIC
              <br />
              Your car's maintenance is the key to healthy and smooth driving.
              <br />
              We pick the right mechanic meant for your machine so that you don't have to worry about who work on your car.
              <br />
              From professonals to mechanic experts, we carefully pick the best one for the job.
              <br />
              We have received hundreds of feedbacks from our customers on how satisfied they are <br/> regarding the work our mechanic have done for them.
              <br />
              Book an appointment now with our mechanic.
            </h2>
            <div className="mechanic mt-4">
              <a href="/mechanic">
                <button className="bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 border border-white-700 rounded-xl">
                  Book a slot 
                </button>
              </a>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Body2;
