'use client'
import React, { useState, useRef, useEffect} from 'react'

function Card(props){
  const [open,setOpen] = useState(false);
  const [showReadMode,setReadMode] = useState(false)
  const ref = useRef(null)
  useEffect(()=>{
    if(ref.current){
      // console.log(ref.current.scrollHeight,ref.current.clientHeight)
      setReadMode(
        ref.current.scrollHeight !== ref.current.clientHeight
      );
    }
  })
  const length = 0
  return (
    <div className=''>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl max-w-sm">
      <img className="max-w-sm w-full h-auto rounded-t-xl" src={props.image} alt={props.topic}/>
      <div className="p-4 md:p-5">
        <h3 className=" text-lg font-bold text-gray-800" >{props.topic}</h3>
        <p className={`mt-1 text-gray-500 ${open ? 'line-clamp-3' : 'line-clamp-10'} `} ref={ref}>
          {props.description}
        </p>
        {showReadMode &&
          <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>setOpen(!open)}>{open ? "Read More" : "Read Less"}</button>
        } 
      </div>
    </div>

    </div>
  )
}

export default Card