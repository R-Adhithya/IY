'use client'
import React from 'react'
import {Arjun ,Bhadra,Bhima,Brinda,Jambavati,Kalindi,Rukmini,Sathyabama,Spoorthi,Vyasa, Create} from "../assets" 
import Image from 'next/image'
import Card from './Card'
import Accordion from './Accordion'
const Hero = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };
  const faq = [
    {
      'question':'Is this program suitable for managing specific health conditions?',
      "answer":'Our program can complement traditional treatments for various conditions, but we recommend consulting with your healthcare provider before starting any new wellness regimen. '
    },
    {
      'question':'What kind of support and guidance will I receive?',
      "answer":'You’ll receive continuous support from experts in Ayurveda, Yoga, and Meditation, including personalized consultations and adjustments to your program as needed. Our program can complement traditional treatments for various conditions, but we recommend consulting with your healthcare provider before starting any new wellness regimen. '
      
    },
    
  ]
  const Benefits = [
    {
    topic:"Inner Peace Mastery",
    image: {Arjun},
    description:"Achieve a serene state of mind, where stress and turmoil give way to tranquility and balance, enhancing your daily life and interactions"
    },
    {
    topic:"Crystal-Clear Focus",
    image:{Bhadra},
    description:"Sharpen your concentration, enabling you to tackle tasks and challenges with unparalleled precision and efficiency"
    },
    {
    topic:"Clarity of Thought",
    image:{Bhima},
    description:"Navigate life's decisions with confidence, thanks to a heightened sense of understanding and decision-making prowess"
    },
    {
    topic:"Immunity and Health Boost",
    image:Brinda,
    description:"Strengthen your body's defenses and promote overall health through practices that balance mind, body, and spirit"
    },
    {
    topic:"Emotional Well-Being",
    image:{Jambavati},
    description:"Cultivate a resilient and joyful heart, managing emotions with grace and fostering a deeper sense of happiness"
    },
    {
    topic:"Lifestyle and Relationship Enhancement",
    image:{Vyasa},
    description:"Transform your lifestyle into one that promotes well-being, enriching relationships and personal fulfillment through mindful living"
    },
    
]
  return (
    <div className='min-container'>
        <div className=" text-center bg-gray-100 max-container lg:px-28 pt-40">
            <div className="justify-between flex flex-col lg:flex-row-reverse">
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="lg:max-w-sm w-140 h-70 rounded-sm px-24 pb-4 sm:py-20 lg:pl-32 lg:pr-16" />
                <div className="lg:pt-32 lg:pl-20">
                    <h1 className="text-5xl font-bold text-black">The Inner Yatra</h1>
                    <p className="py-6 text-black text-ellipse text-center">
                    Our programs draw wisdom from ancient Indian Sidhar lineages, combining timeless spiritual practices, metaphysical insights, and practical guidance for holistic well-being. Grounded in the Vedas, Upanishads, and classical texts like the Caraka Samhita and Sushruta Samhita, our research-based approach offers an authentic, affordable, and personalized path to harmonizing mind, body, and spirit. Unlock the secrets to self-discovery, resilience, and enduring vitality through our integrated system tailored for modern seekers.
                    </p>
                </div>
            </div>
        </div>
        <div className="max-container bg-zinc-300">
        <div className=" text-black place-content-center justify-items-center text-center pb-10 min-w-10xl min-container">
          <h1 className='py-20 text-xl font-semibold lg:text-5xl'>Create your own AI Coach</h1>
          <br/>
          <h6 className='text-md text-center '>Design Your Personal Coach, Unlock Your Wellness Journey!</h6>
          <br />
          <div>
      
    </div>
          <br />
          <p className="lg:px-[300px]">Choose from our curated collection of coaches or create your own unique coach. Name your coach and let our AI craft a personalized wellness program tailored just for YOU. Embrace your coach and embark on a transformative journey like no other</p>
          
          <a href="/Enrol"><button className='bg-black text-white px-5 rounded-md py-3 mt-6'>Enroll Now</button></a>
          </div>

        </div>
        <div className='bg-slate-200 text-black text-center justify-center max-container pb-10 '>
          <h1 className='py-20 text-3xl lg:text-5xl font-bold'>Our Pillars</h1>
          <hr />
          <div className='px-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 md:gap-y-4 md:gap-x-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-4 gap-y-5 lg:px-[200px] place-items-center'>
              
                {Benefits.map((benefits,index)=>(
                  <Card key={index} topic={benefits.topic} image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" description={benefits.description}/>
                ))}
            </div>
          </div>
        
        </div>
        <div className='bg-slate-200 text-black text-center justify-center lg:px-[200px] pb-20'>
          <h1 className="pt-20 text-3xl lg:text-5xl">FAQ</h1>
          <h6 className='pb-20 pt-3'>(Frequently Asked Questions)</h6>
          <div className="collapse bg-base-200"> 
            {faq.map((items,index)=>(
              <Accordion question={items.question} answer={items.answer}/>
            ))
            }
            
          </div>
        </div>
    </div>
  )
}

export default Hero