import React from 'react'
import Image from "next/image"
import {Iy} from "../assets"

const Navbar = () => {
  return (
    <div className="max-container z-999999999999999999 top-0">
        <header className="flex fixed flex-wrap sm:justify-start  w-full bg-white text-sm py-4">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <a className="flex-none text-xl font-semibold" href="#">
                <Image src={Iy} width={140} height={70}  alt="TIY"/>
                </a>
                <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
                    <a className="font-medium text-gray-600" href="/" aria-current="page">
                        Home
                    </a>
                    <a className="font-medium text-gray-600 hover:text-gray-400" href="/Enrol">
                        Enroll
                    </a>
                    <a className="font-medium text-gray-600 hover:text-gray-400" href="/Blog">
                        Blog
                    </a>
                    <a className="font-medium text-gray-600 hover:text-gray-400" href="/">Login</a>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar