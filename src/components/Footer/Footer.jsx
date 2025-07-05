import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="min-h-90 bg-gradient-to-r from-[#F39c0b] to-[#e86f00] pt-14 pb-10 text-white">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-20">

        {/* About Orange Mint */}
        <div data-aos="fade-up" data-aos-delay="300"  className="space-y-4">
          <h1 className="text-3xl font-bold">Orange Mint</h1>
          <p className="text-base leading-relaxed opacity-90">
            Delivering fresh oranges and natural juice with quality taste and health benefits.
            Experience the freshness from the orchard to your home!
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="500" className="space-y-4">
          <h2 className="text-2xl font-semibold">Quick Links</h2>
          <ul className="space-y-2 text-base opacity-95">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div data-aos="fade-up" data-aos-delay="700" className="space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-base">Name: XXX</p>
          <p className="text-base">Email: orangemint@email.com</p>
          <p className="text-base">Phone: +62 812-34xx-xxx</p>
          <p className="text-base">Address: Manado, Indonesia</p>
          <div className="flex space-x-4 text-2xl pt-2">
            <a href="#"><FaFacebook className="hover:text-blue-200" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-200" /></a>
            <a href="#"><FaGoogle className="hover:text-red-200" /></a>
            <a href="#"><FaTelegram className="hover:text-blue-300" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div data-aos="fade-up" data-aos-delay="900" className="text-center pt-10 text-base opacity-80 font-light">
        © {new Date().getFullYear()} <span className="font-medium">Nilz</span>. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
