import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Pluckcard from '../Components/pluckcard'
const Blog = () => {
  return (
    <div className="bg-white">
      <Navbar/>
      <div className="pt-32 pb-20 text-center place-items-center justify-center text-neutral-700">
        <h1 className="text-center text-3xl lg:text-5xl pt-5">
          Blogposts
          {/* px-20 py-20 grid grid-cols-1 lg:grid-cols-3 space-y-4 lg:space-y-10 lg:space-x-10 grid-flow-row */}
        </h1>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 pt-16 px-auto py-auto justify-center  place-items-center'>
          <Pluckcard/>
          <Pluckcard/>
          <Pluckcard/>
          <Pluckcard/>
        </div>
      </div>
      <div className='bottom-0'>
      <Footer/>
      </div>
    </div>
  )
}

export default Blog