import React from 'react'
import Fruits1 from "../../assets/fruits1.png"
import Fruits2 from "../../assets/fruits2.png"
import Fruits3 from "../../assets/fruits3.png"

const serviceData = [
{
    id:1,
    Image:Fruits1,
    titel:"Fresh Fruits",
    subtitel:"Handpicked fresh oranges straight from the orchard — rich in vitamin C and naturally sweet. Perfect for daily consumption to boost your immune system.",
    aosDelay:"300"
},
{
    id:2,
    Image:Fruits2,
    titel:"Fruits Juice",
    subtitel:"A vibrant fruit juice blend with orange as the base, mixed with other tropical fruits for a refreshing and flavorful experience. Perfect harmony of sweet and tangy in every sip.",
    aosDelay:"500"
},
{
    id:3,
    Image:Fruits3,
    titel:"Orange Juice",
    subtitel:"100% pure orange juice with the crisp, natural flavor of freshly squeezed oranges. A healthy source of energy and antioxidants anytime you need it.",
    aosDelay:"700"
} 
]
const Service = () => {console.log(serviceData)
  return (
    <div className='grid place-items-center'>
    <div className=' my-16 space-y-4 max-w-300'>
        {/* header section */}
        <div className='text-center max-w-lg mx-auto space-y-2'>
            <h1  data-aos="fade-up"   className='text-3xl font-bold text-[#656565]'>Fresh and <span className='text-[#F39c0b]'>Tasty Fruits
                </span>{" "}
                </h1>
        <p data-aos="fade-up" 
                     data-aos-delay="300" className='text-sm opacity-50'>Enjoy handpicked, farm-fresh fruits delivered straight to you. Packed with natural flavor and nutrients, our fruits are perfect for your healthy and delicious lifestyle.</p>
        
        </div>

        {/* card section */}
        <div className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-8'>
            {serviceData.map (({id,Image,titel,subtitel,aosDelay})=>(
              <div key={id} data-aos="fade-up" data-aos-delay=
              {aosDelay}
              className={`p-4 text-center space-y-6 justify-center
             ${ id === 1 ? 'pt-23' : id === 2 ? 'pt-13' : ''} `}>
                <img src={Image} alt=''
                className=' max-w-[170px] mx-auto
                hover:scale-110 duration-300 img-shadow2'/>
                <div className='space-y- w-80 ' >
                    <h1 data-aos="fade-up"  className='text-2xl font-bold text-[#F39c0b]'>{titel}</h1>
                    <p  
                    className='text-[#656565]'>{subtitel}</p>
                </div>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Service