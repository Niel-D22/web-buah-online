import React from 'react'
import Worldmap from "../../assets/petaDunia.png"

const WhereToBuy = () => {
  return (
    <div className="w-screen min-h-130 flex justify-center items-center px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-300 w-full">
        
        {/* text-content section */}
        <div className="space-y-8 text-center md:text-left">
          <h1  data-aos="fade-up" data-aos-delay="300" className="text-4xl font-bold text-[#656565] font-serif">
            Where to buy <br/> our products?
          </h1>

          {/* Input ditata ke bawah (grid vertical) */}
          <div data-aos="fade-up" data-aos-delay="500" className="grid gap-4">
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full md:w-[200px]"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="input-style w-full md:w-[200px]"
            />
          </div>

          <button data-aos="fade-up" data-aos-delay="700" className="primary-button">Search</button>
        </div>

        {/* map section */}
        <div data-aos="fade" className="flex justify-center">
          <img
            src={Worldmap}
            alt="World Map"
            className="w-full max-w-[600px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};




export default WhereToBuy