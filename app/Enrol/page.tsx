import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import {Arjun ,Bhadra,Bhima,Brinda,Jambavati,Kalindi,Rukmini,Sathyabama,Spoorthi,Vyasa, Create} from "../assets" 
const Home = () => {
  const Benefits = [
    {
    topic:"Inner Peace Mastery",
    image: "../assets/Arjun",
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

  const Pillars = [
    {
      category: "Music",
      image: {Arjun}, // Add the correct path to your image here
      benefits: [
        "Classical Indian Music",
        "Raga Therapy",
        "Alignment with Natural Rhythms",
        "Personalized Raga Recommendations"
      ],
      description: "Customized MUSIC files with specific frequency recorded to suit individual's profile, having deep influence on the process of healing."
    },
    {
      category: "Mudras",
      image: "",
      benefits: [
        "Integration of Mudras",
        "Specific Outcomes",
        "Customized Health Management",
        "Synergy with Holistic Practices"
      ],
      description: "Suggested Mudras helps to enhance your focus, balance your energy, and promote your overall well-being."
    },
    {
      category: "Mantras",
      image: "", // Add the correct path to your image here
      benefits: [
        "Enhanced Concentration",
        "Calming Effect",
        "Integration in Daily Routines",
        "Alignment and Enlightenment"
      ],
      description: "The recommended Mantras with precise sound patterns & tempos, based on your profile, helps to harmonize & synchronize with sought-after equilibrium."
    },
    {
      category: "Mantras",
      image: "", // Add the correct path to your image here
      benefits: [
        "Mantra for Focus",
        "Mind Calming",
        "Daily Practice Enrichment",
        "Spiritual Connection"
      ],
      description: "Handpicked Meditation enables you to tap into your immense inner potential, experience realities beyond the usual sensory perceptions for a meaningful connection."
    },
    {
      category: "Nutrition",
      image: "", // Add the correct path to your image here
      benefits: [
        "Ayurvedic Nutrition Principles",
        "Holistic Food Approach",
        "Customized Dietary Plans",
        "Seasonal and Local Eating"
      ],
      description: "Bespoke Nutrition plan will be provided to suit your body's need and condition, complimenting your suggested kriya and lifestyle."
    },
    {
      category: "Breathwork",
      image: "", // Add the correct path to your image here
      benefits: [
        "Pranayama - Life Force Extension",
        "Purpose and Benefits",
        "Respiratory Health",
        "Techniques for Mental Clarity"
      ],
      description: "Right pranayama technique is suggested based on your body design and our analysis of your response, to help you get ready for energy level improvements."
    },{
      category: "Yantra",
      image: "", // Add the correct path to your image here
      benefits: [
        "Purpose and Use",
        "Personalized Integration",
        "Meditative Focus"
      ],
      description: "Recommended yantra helps you to facilitate easy flow of energy in you, and to upgrade your energy levels."
    },
    {
      category: "Yoga",
      image: "", // Add the correct path to your image here
      benefits: [
        "Holistic Practice",
        "Beyond Physical Fitness",
        "Tailored Yoga Styles"
      ],
      description: "Personal Yoga routine from acharyas to address your wellness goals, increase inner awareness, overcoming physical constraints and accelerate your progress."
    },
    {
      category: "Affirmations",
      image: "", // Add the correct path to your image here
      benefits: [
        "Encouraging Introspection",
        "Growth and Understanding",
        "Addressing Mental Challenges",
        "Behavioral Change and Well-being",
        "Focused on Individual Needs",
        "Holistic Wellness Approach"
      ],
      description: "Deep Affirmations lessons offer users profound insights and self-awareness. Journaling and feedback will support your journey by helping to adjust with the course or further deepen your understanding.",
    }   
  ]
  const Process = [
    {
    topic:"Onboarding",
    desc:"User creates an account, customizes their AI coach, and selects a subscription plan to complete payment.",
    image:"../assets/Arjun.png",
    },
    {
    topic:"Program Customization",
    desc:"User completes a questionnaire for their AI coach, which analyzes the responses and generates a personalized wellness program",
    image:"",
    },
    {
      topic:"Program Delivery",
      desc:"User begins the program, receiving daily follow-ups, reminders, motivation, and tracking progress through a daily journal, with the ability to interact with the AI coach for guidance.",
      image:"",
      },
    {
      topic:"Feedback Monitoring and Adjustment",
      desc:"The AI coach analyzes progress, adjusts the program as needed, and the user can review progress and renew the subscription to continue their wellness journey.",
      image:"",
    },
    
]
  return (
    <div className='max-container'>
        <Navbar/>
        <div className="py-32">
          <div className="px-10 w-full bg-white">
            <div className='bg-white text-black text-center justify-center items-center min-container  px-10'>
                <h1 className="lg:py-20 py-8 text-3xl lg:text-5xl">Transformative Benefits of our program.</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center pt-7 md:px-10 gap-y-10 md:gap-x-4'>
                {Pillars.map((items,index)=>(
                  <Card key={index} topic = {items.category} image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" description = {items.description} />
                ))
                } 
                </div>
            </div>
          </div>
        </div>
        {/* The process explaination */}
        <div className='max-container'>
        <div className="w-full text-black bg-slate-200 py-20">
          <h1 className="text-center text-3xl lg:text-5xl md:text-4xl pb-10 ">Process</h1>
          <br />
          <div className="max-container justify-center items-center px-10">
            <div className='min-container grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4 grid-row-flow px-10 py-10 h-auto max-h-sm text-clip place-content-stretch'>
              {Process.map((items,index)=>(
                <Card key={index} topic = {items.topic} image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" description = {items.desc}/>
              ))
              } 
            </div>
          </div>
          
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded shadow-xl">Register</button>
        </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home