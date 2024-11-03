import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-customGray text-white ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm py-20 tracking-[0.02em]">
        
        {/* Logo Section */}
        <div>
        <Image
  src="/logo2.png"
  alt="Digital Project Logo"
  width={200} // specify the width
  height={100} // specify the height
  className="mx-20 mb-4" // maintain your margins
/>

          <h2 className="text-lg"></h2>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="font-bold mb-8">Information</h3>
          <ul className="space-y-5">
            <li><a href="#" className="hover:underline">Main</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
            <li><a href="#" className="hover:underline">Certifications</a></li>
            <li><a href="#" className="hover:underline">Contacts</a></li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div>
          <h3 className="font-bold mb-8">Contacts</h3>
          <div className="flex gap-4 mb-16">
          <Image
          src="/icon1.png"
          alt="Digital Project Logo"
          width={37} 
          height={50} 
          className="mb-4" 
           />
            <p>1234 Sample Street <br /> Karachi, Pakistan 78704</p>
          </div>
          <div className="flex gap-4 mb-4">
          <Image
          src="/icon2.png"
          alt="Digital Project Logo"
          width={37} 
          height={50} 
          className="mb-4" 
           />
            <p>92 306 0484798</p>
          </div>
          <div className="flex gap-4">
          <Image
          src="/icon3.png"
          alt="Digital Project Logo"
          width={37} 
          height={50} 
          className="-my-[10px] " 
           />
            <p>tahashabbir321@gmail.com</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="font-bold mb-8">Social Media</h3>
          <div className="flex space-x-4 gap-7 mb-14">
          <Link href="https://www.facebook.com/yourprofile" legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <Image
          src="/icon4.png" 
          alt="Facebook Link"
          width={20} 
          height={50}
          className="hover:opacity-80 transition duration-200" 
        />
      </a>
    </Link>
    <Link href="https://twitter.com" legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <Image
          src="/icon5.png" 
          alt="Facebook Link"
          width={30} 
          height={50}
          className="hover:opacity-80 transition duration-200 my-1" 
        />
      </a>
    </Link>
    <Link href="https://linkedin.com" legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <Image
          src="/icon6.png" 
          alt="Facebook Link"
          width={25} 
          height={50}
          className="hover:opacity-80 transition duration-200" 
        />
      </a>
    </Link>
    <Link href="https://pinterest.com" legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <Image
          src="/icon7.png" 
          alt="Facebook Link"
          width={25} 
          height={50}
          className="hover:opacity-80 transition duration-200" 
        />
      </a>
    </Link>
          </div>
          <div className="flex font-bold text-lg space-y-10 mb-5"><p>Created By:</p></div>
          <div className="flex">
            <h1 className="text-lg md:text-5xl font-bold text-gray-700">
              <span className="inline-block animate-glow">T</span>
              <span className="inline-block animate-glow [animation-delay:0.3s]">a</span>
              <span className="inline-block animate-glow [animation-delay:0.6s]">h</span>
              <span className="inline-block animate-glow [animation-delay:0.9s]">a</span>
              <span className="inline-block ml-4"> </span>
              <span className="inline-block animate-glow [animation-delay:1.5s]">S</span>
              <span className="inline-block animate-glow [animation-delay:1.8s]">h</span>
              <span className="inline-block animate-glow [animation-delay:2.1s]">a</span>
              <span className="inline-block animate-glow [animation-delay:2.4s]">b</span>
              <span className="inline-block animate-glow [animation-delay:2.7s]">b</span>
              <span className="inline-block animate-glow [animation-delay:3.0s]">i</span>
              <span className="inline-block animate-glow [animation-delay:3.3s]">r</span>
            </h1>
          </div>

           
        </div>
       
      </div>
       {/* Copyright Section */}
       <div className="mt-20 border-t border-gray-600 text-center  text-sm font-thin space-y-5  ">    
         <p className='text-customGrey tracking-[0.02em] p-8'>&copy; 2021 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
