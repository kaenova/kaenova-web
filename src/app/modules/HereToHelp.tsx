"use client"

import React from 'react'

function LargeNeedToHelp() {
  return <div className='hidden lg:block'>
    <div className='flex flex-col max-w-3xl gap-4'>
      <div className='grid grid-flow-col grid-cols-2 gap-4'>
        <div className="flex flex-col justify-between bg-[#211F1E] rounded-md p-6">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-white text-center">Machine Learning NLP Consultation</p>
            <p className="text-secondary-btn">Leverage my expertise in NLP to unlock the power of text data. I offer comprehensive solutions for sentiment analysis, text classification, named entity recognition, and more. Harness the potential of NLP to gain valuable insights and automate language-based tasks.</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="mailto:kaenova@gmail.com" className='px-8 py-3 rounded-md bg-primary-btn hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all'>
              <p className='t text-white whitespace-nowrap font-bold'>Get Started</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[#211F1E] rounded-md p-6 gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-white text-center">Machine Learning Model Deployment</p>
            <p className="text-secondary-btn">Seamlessly deploy and integrate machine learning models into your applications. Benefit from my experience in deploying models using popular frameworks and technologies such as TensorFlow, PyTorch, FastAPI, Docker, and Kubernetes. Ensure smooth and efficient integration of ML models for real-world use cases.</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="mailto:kaenova@gmail.com" className='px-8 py-3 rounded-md bg-primary-btn hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all'>
              <p className='t text-white whitespace-nowrap font-bold'>Get Started</p>
            </a>
          </div>
        </div>
      </div>
      <div className='bg-accent/20 flex flex-row px-6 py-8 gap-10 rounded-md'>
        <div className='flex flex-col gap-6'>
          <p className='text-white font-bold text-2xl'>Let’s Work Together!</p>
          <p className='text-secondary-btn text-left'>I'm an experienced ML practicant specializing in NLP and ML model deployment. With expertise in NLP solutions and seamless model integration, I offer tailored ML consulting to meet your specific business needs. From model development to deployment on scalable infrastructure, I provide end-to-end support. Let's collaborate to drive impactful results and transform your opportunity!</p>
        </div>
        <div className='flex flex-row items-center'>
          <a href="mailto:kaenova@gmail.com" className='px-8 py-3 rounded-md bg-primary-btn hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all'>
            <p className='text-lg text-white whitespace-nowrap font-bold'>Get In Touch!</p>
          </a>
        </div>
      </div>
    </div>
  </div>
}

function SmallNeedToHelp() {
  return (
    <div className='lg:hidden block'>
      <div className='flex flex-col max-w-3xl gap-4'>
        <div className="flex flex-col justify-between bg-[#211F1E] rounded-md p-6 gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-white">Machine Learning NLP Consultation</p>
            <p className="text-secondary-btn">Leverage my expertise in NLP to unlock the power of text data. I offer comprehensive solutions for sentiment analysis, text classification, named entity recognition, and more. Harness the potential of NLP to gain valuable insights and automate language-based tasks.</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="mailto:kaenova@gmail.com" className='px-8 py-3 rounded-md bg-primary-btn hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all'>
              <p className='t text-white whitespace-nowrap font-bold'>Get Started</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[#211F1E] rounded-md p-6 gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-white">Machine Learning Model Deployment</p>
            <p className="text-secondary-btn">Seamlessly deploy and integrate machine learning models into your applications. Benefit from my experience in deploying models using popular frameworks and technologies such as TensorFlow, PyTorch, FastAPI, Docker, and Kubernetes. Ensure smooth and efficient integration of ML models for real-world use cases.</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="mailto:kaenova@gmail.com" className='px-8 py-3 rounded-md bg-primary-btn hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all'>
              <p className='t text-white whitespace-nowrap font-bold'>Get Started</p>
            </a>
          </div>
        </div>
        <div className='bg-accent/20 flex flex-col px-6 py-8 gap-10 rounded-md'>
          <div className='flex flex-col gap-6'>
            <p className='text-white font-bold text-2xl'>Let’s Work Together!</p>
            <p className='text-secondary-btn text-left'>I'm an experienced ML practicant specializing in NLP and ML model deployment. With expertise in NLP solutions and seamless model integration, I offer tailored ML consulting to meet your specific business needs. From model development to deployment on scalable infrastructure, I provide end-to-end support. Let's collaborate to drive impactful results and transform your opportunity!</p>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <a href="mailto:kaenova@gmail.com" className='px-8 py-3 rounded-md bg-primary-btn hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all'>
              <p className='text-lg text-white whitespace-nowrap font-bold'>Get In Touch!</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function HereToHelp() {
  return (
    <div id='here-to-help' className='flex flex-col mt-16 items-center gap-6 mx-7'>
      <div>
        <p className='text-4xl font-bold text-center text-white '>I’m Here To Help You</p>
      </div>
      <LargeNeedToHelp />
      <SmallNeedToHelp />
    </div>
  )
}

export default HereToHelp