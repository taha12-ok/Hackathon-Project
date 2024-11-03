import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <>
      <div className="bg-white">
        <ul className="flex items-center gap-20 font-roboto">
          <li>
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={112}  // Adjust this value based on the actual logo size
              height={52}  // Adjust this value based on the actual logo size
              className="w-28 h-13 m-5 ml-20" 
            />
          </li>
          <li className="relative pl-40">
            <span className="main-menu-item hover:before:absolute hover:before:left-0 hover:before:top-0 hover:before:w-full hover:before:h-0.5 hover:before:bg-black hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-black">
            </span>
          </li>
          <li className="relative group">
            <span className="main-menu-item text-customGray relative inline-flex flex-col justify-center items-center tracking-[0.1em] text-sm group-hover:before:absolute group-hover:before:content-[''] group-hover:before:w-[70px] group-hover:before:h-[1.5px] group-hover:before:bg-customGray group-hover:before:top-0 group-hover:after:absolute group-hover:after:content-[''] group-hover:after:w-[70px] group-hover:after:h-[1.5px] group-hover:after:bg-customGray group-hover:after:bottom-0 h-[30px]">
              MAIN
            </span>
          </li>
          <li className="relative group">
            <span className="main-menu-item text-customGray relative inline-flex flex-col justify-center items-center tracking-[0.1em] text-sm group-hover:before:absolute group-hover:before:content-[''] group-hover:before:w-[100px] group-hover:before:h-[1.5px] group-hover:before:bg-customGray group-hover:before:top-0 group-hover:after:absolute group-hover:after:content-[''] group-hover:after:w-[100px] group-hover:after:h-[1.5px] group-hover:after:bg-customGray group-hover:after:bottom-0 h-[30px]">
              GALLERY
            </span>
          </li>
          <li className="relative group">
            <span className="main-menu-item text-customGray relative inline-flex flex-col justify-center items-center tracking-[0.1em] text-sm group-hover:before:absolute group-hover:before:content-[''] group-hover:before:w-[120px] group-hover:before:h-[1.5px] group-hover:before:bg-customGray group-hover:before:top-0 group-hover:after:absolute group-hover:after:content-[''] group-hover:after:w-[120px] group-hover:after:h-[1.5px] group-hover:after:bg-customGray group-hover:after:bottom-0 h-[30px]">
              PROJECTS
            </span>
          </li>
          <li className="relative group">
            <span className="main-menu-item text-customGray relative inline-flex flex-col justify-center items-center tracking-[0.1em] text-sm group-hover:before:absolute group-hover:before:content-[''] group-hover:before:w-[150px] group-hover:before:h-[1.5px] group-hover:before:bg-customGray group-hover:before:top-0 group-hover:after:absolute group-hover:after:content-[''] group-hover:after:w-[150px] group-hover:after:h-[1.5px] group-hover:after:bg-customGray group-hover:after:bottom-0 h-[30px]">
              CERTIFICATION
            </span>
          </li>
          <li className="relative group">
            <span className="main-menu-item text-customGray relative inline-flex flex-col justify-center items-center tracking-[0.1em] text-sm group-hover:before:absolute group-hover:before:content-[''] group-hover:before:w-[110px] group-hover:before:h-[1.5px] group-hover:before:bg-customGray group-hover:before:top-0 group-hover:after:absolute group-hover:after:content-[''] group-hover:after:w-[110px] group-hover:after:h-[1.5px] group-hover:after:bg-customGray group-hover:after:bottom-0 h-[30px]">
              CONTACTS
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
