import React from 'react'

const Acc = (props) => {
  return (
    <div className="bg-gray-400 text-white">
      <div className="collapse bg-inherit ">
        <input type="radio" name="my-accordion-1" /> 
        <div className="collapse-title text-xl font-medium">
          {props.question}
        </div>
        <div className="collapse-content">
        <div className="">
          <p>{props.answer}</p>
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default Acc