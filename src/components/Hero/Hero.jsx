import React from "react";
import OrangeImg from "../../assets/Orangebg.png";
import Navbar from "../Navbar/Navbar";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";



const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <main className="md:px-12 md:py-6 bg-[#d65609]">
      <section className="relative min-h-[650px] bg-gradient-to-r from-[#F39c0b] to-[#e86f00] pl-20 w-full 
             md:rounded-xl shadow-md">
        <div>
          {/*Navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/*Hero section */}
          <div
            className="grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-3 place-items-center
             min-h-[650px]  "
          >
            {/*text content section */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1
                className="text-3xl pl-6 md:pl-14
                "
              >
                01_______
              </h1>
              <h1 className="text-5xl font-bold uppercase text-shadow">
               A Healty fruits
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                sunt hic saepe debitis a eius doloremque cumque non, cupiditate
                minima error voluptatibus eos unde eveniet veritatis. Delectus,
                quam quos. Minus.
              </p>
              <button className="secondary-button">Buy Now</button>
            </div>
            {/*image section */}
            <div>
              <img
                src={OrangeImg}
                alt="Not found"
                className="relative z-10 w-[400px] img-shadow"
              />
            </div>
            {/* blank div section */}
            <div className="md:hidden"></div>
          </div>
        </div>

        {/* bacground besar section */}
        <h1 className="large-text">Orange</h1>

        {/* sidebar section */}

        {sidebar && (
          <div
            className="absolute top-0 right-0 w-[120px]
                h-full bg-gradient-to-b from-[#F39c0b] z-10"
          >
            <div className="w-full h-full flex
            justify-center items-center"> 
            <div className="text-white flex
            flex-col justify-center items-center
            gap-6 ">
                {/* line */}
                <div className="w-[1px] h-[70px]
                bg-white"> </div>
                <div className="inline-blok p-2 rounded-full cursor-pointer border border-white ">
                    <FaFacebookF className="text-2xl "/>
                </div>
                <div className="inline-blok p-2 rounded-full cursor-pointer border border-white ">
                    <FaInstagram className="text-2xl "/>
                </div>
                <div className="inline-blok p-2 rounded-full cursor-pointer border border-white ">
                    <LuGithub className="text-2xl "/>
                </div>
                {/* line */}
                <div className="w-[1px] h-[70px]
                bg-white"> </div>

            </div>
          </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
