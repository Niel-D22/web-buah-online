import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({sidebar, setSidebar}) => {
    console.log(sidebar,setSidebar)
  return (
    <div className=' absolute top-0  w-full py-2
    text-white z-20'>
        <div data-aos="fade" className="container">
            <div className='flex justify-between item'>
                {/* logo  */}
                <h1 className='text-4xl font-bold
                uppercase'>Orange <span className='font-normal'>
                    Mint</span>
                    </h1>

                    {/* nav pilihan */}
                    <ul className=' lg:flex hidden pr-50 space-x-20 text-xl'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Where to find</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>

                    {/* hamburger menu */}
                    <div className='relative right-36' onClick={()=>setSidebar(!sidebar)}>
                        <GiHamburgerMenu className='text-3xl
                        cursor-pointer' />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar