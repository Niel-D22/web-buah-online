import React from 'react'
import OrangeImg from "../../assets/Orangebg.png"

const Hero = () => {
  return (
    <main className='md:px-12 md:py-6 bg-[#d65609]' >
        <section className='relative min-h-[650px] bg-gradient-to-r from-[#F39c0b] to-[#e86f00] pl-20 w-full 
             md:rounded-xl shadow-md'>
        <div class="container">
            {/*Navbar section */}


            {/*Hero section */}
            <div className='grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-3 place-items-center
             min-h-[650px]  '>
             {/*text content section */}
             <div className='text-white mt-[100px] md:mt-0 p-4 space-y-4'>
                <h1 className='text-3xl pl-6 md:pl-14
                '>01_______</h1>
                <h1 className='text-5xl font-bold uppercase text-shadow'>Buah Yang Sehat</h1>
                <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sunt hic saepe debitis a eius doloremque cumque non, 
                    cupiditate minima error voluptatibus eos unde eveniet veritatis. Delectus, quam quos. Minus.</p>
                    <button className='primary-button'>Beli Sekarang</button>
             </div>
             {/*image section */}
             <div>
                <img src={OrangeImg} alt="Not found" 
                className='relative z-10 w-[400px] img-shadow'/>
                
             </div>
             {/* blank div section */}
         <div className='md:hidden'></div>
            </div>
        </div>

        {/* bacground div section */}
        <h1>
            o
        </h1>
        </section>
    </main>
  )
}

export default Hero