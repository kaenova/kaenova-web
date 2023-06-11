import React from 'react'

function BackToTop() {

  function handleClick() {
    if (!window) {
      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='flex flex-col mt-16 text-white text-center font-semibold'>
      <p>This is the end of the page</p>
      <p>Thank you for checking my website until the end 🌟</p>
      <button onClick={handleClick} type='button' className='text-white font-semibold text-center'>Back to top</button>
    </div>
  )
}

export default BackToTop